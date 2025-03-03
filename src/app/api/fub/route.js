import { NextResponse } from "next/server";
import { siteInfo } from "../../../../administration/siteInfo";

export async function POST(request) {
  try {
    //  Parse the JSON body from the form
    const body = await request.json();

    /**
     * Example body might be:
     * {
     *   firstName: "John",
     *   lastName: "Doe",
     *   email: "john@doe.com",
     *   phoneNumber: "123-456-7890",
     *   isAgentOrBroker: "No",
     *   isRepresented: "Yes",
     *   ...
     *   interestedIn: "Renting" | "Buying" | "Selling"
     *   ...
     * }
     */

    //  Decide FUB "type" based on interestedIn
    let eventType = "General Inquiry"; // fallback
    if (body.interestedIn === "Renting" || body.interestedIn === "Buying") {
      eventType = "Property Inquiry";
    } else if (body.interestedIn === "Selling") {
      eventType = "Seller Inquiry";
    }

    // Then push tags
    let tags = [];
    if (body.interestedIn === "Renting") {
      tags.push("Renter");
    } else if (body.interestedIn === "Buying") {
      tags.push("Buyer");
    } else if (body.interestedIn === "Selling") {
      tags.push("Seller");
    }

    //  Convert form data to a more readable multiline text
    //    e.g.:
    //    firstName: John
    //    lastName: Doe
    //    email: john@doe.com
    //    ...
    const multilineMessage =
      "Form Submission Details:\n\n" +
      Object.entries(body)
        .map(([key, val]) => `${key}: ${val}`)
        .join("\n");

    //  Construct the FUB event payload
    const fubPayload = {
      source: siteInfo?.nameWebsite || "Website",
      system: "Next.js Website",
      type: eventType,
      person: {
        firstName: body.firstName,
        lastName: body.lastName,
        emails: [
          {
            value: body.email,
            type: "home",
          },
        ],
        phones: [
          {
            value: body.phoneNumber,
            type: "mobile",
          },
        ],
        tags, // attach the array of tags
      },
      // This is the user-friendly message that FUB shows in contact history
      message: multilineMessage,
    };

    //  Send to Follow Up Boss
    const apiKey = process.env.FUB_API_KEY; // read from .env or hosting env
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "No FUB_API_KEY configured" },
        { status: 500 }
      );
    }

    // "Basic <Base64Encoded('APIKEY:x')>"
    const authString = Buffer.from(`${apiKey}:x`).toString("base64");

    const fubResponse = await fetch("https://api.followupboss.com/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authString}`,
      },
      body: JSON.stringify(fubPayload),
    });

    // If success => 200/201 => good
    if (!fubResponse.ok) {
      const errorData = await fubResponse.json();
      return NextResponse.json(
        { success: false, error: errorData },
        { status: fubResponse.status }
      );
    }

    const data = await fubResponse.json();
    return NextResponse.json(
      { success: true, data },
      { status: fubResponse.status }
    );
  } catch (err) {
    console.error("Error in /api/fub route:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

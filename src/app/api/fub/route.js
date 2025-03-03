import { NextResponse } from "next/server";
import { siteInfo } from "../../../../administration/siteInfo";

export async function POST(request) {
  try {
    const body = await request.json();

    // body might contain fields like:
    // {
    //   firstName: "John",
    //   lastName: "Doe",
    //   email: "john@example.com",
    //   phone: "123-456-7890",
    //   ... maybe more ...
    // }

    // 1) Construct the Follow Up Boss event payload
    //    Typically, we at least need a "person" object with contact info,
    //    plus a "type": e.g. "General Inquiry", "Seller Inquiry", or "Property Inquiry" etc.

    const fubPayload = {
      source: siteInfo.nameWebsite,
      system: "Custom Website",
      type: "Inquiry", // "Inquiry" auto-converts to "Property Inquiry" if you add property info,
      // otherwise it becomes "General Inquiry."
      person: {
        firstName: body.firstName,
        lastName: body.lastName,
        emails: [
          {
            value: body.email,
            type: "work",
          },
        ],
        phones: [
          {
            value: body.phone,
            type: "mobile",
          },
        ],
      },
      message: body.message ?? "",
    };

    // 2) Send to FUB
    const apiKey = process.env.FUB_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "No FUB API key configured." },
        { status: 500 }
      );
    }

    const fubResponse = await fetch("https://api.followupboss.com/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${apiKey}:x`)}`,
        // "Authorization: Basic <Base64 of 'APIKEY:x'>"
        // e.g. if key is "abc123", the string is "abc123:x" base64 encoded
      },
      body: JSON.stringify(fubPayload),
    });

    if (fubResponse.ok) {
      // 200 or 201 => success
      const data = await fubResponse.json();
      // data is the response from FUB.
      // Possibly do extra logic or logging here.
      return NextResponse.json(
        { success: true, data },
        { status: fubResponse.status }
      );
    } else {
      // handle error
      const errorData = await fubResponse.json();
      return NextResponse.json(
        { success: false, error: errorData },
        { status: fubResponse.status }
      );
    }
  } catch (err) {
    console.error("Error posting to FUB:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

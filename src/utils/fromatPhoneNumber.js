export const formatPhoneNumber = (phoneNumber) => {
  // Remove any non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Ensure it starts with +1 (US Country Code)
  if (!cleaned.startsWith("1")) {
    return phoneNumber; // Return as is if it's not a US number
  }

  // Extract the area code and the rest of the number
  const areaCode = cleaned.slice(1, 4);
  const firstPart = cleaned.slice(4, 7);
  const secondPart = cleaned.slice(7, 11);

  // Return formatted number (XXX) XXX-XXXX
  return `+1 (${areaCode}) ${firstPart}-${secondPart}`;
};

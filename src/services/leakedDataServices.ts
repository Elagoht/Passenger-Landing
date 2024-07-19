import ApiCaller from "@/utilities/ApiCaller"

// --- Get Leaked Data --- //

/**
 * Thanks to haveibeenpwned.com for providing this API.
 * This API endpoint created to provide a cache data to
 * do not overload the haveibeenpwned.com API.
 */
export const getLeakedDataFromHIBP = () => ApiCaller<HIBPwnedItem[]>(
  "https://haveibeenpwned.com/api/v3/breaches", {
  next: {
    tags: ["breaches"],
    revalidate: 60 * 60 * 24 // 24 hours
  }
})
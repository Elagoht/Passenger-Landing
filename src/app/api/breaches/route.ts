import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {

  // Get search query
  const { searchParams } = request.nextUrl
  const limit = searchParams.get("limit") || "24"
  const offset = searchParams.get("offset") || "0"

  /**
   * Thanks to haveibeenpwned.com for providing this API.
   * This API endpoint created to provide a cache data to
   * do not overload the haveibeenpwned.com API.
   */
  const haveIBeenPwnedData = await fetch(
    "https://haveibeenpwned.com/api/v3/breaches", {
    next: {
      tags: ["breaches"],
      revalidate: 60 * 60 * 24 // 24 hours
    }
  })
  const result = await haveIBeenPwnedData.json() as Partial<HIBPwnedItem>[]

  // Minify the data to be less verbose
  result.forEach(item => {
    delete item.AddedDate
    delete item.ModifiedDate
    delete item.IsVerified
    delete item.IsFabricated
    delete item.IsSensitive
    delete item.IsRetired
    delete item.IsSpamList
    delete item.IsMalware
    delete item.IsSubscriptionFree
  })

  result.sort((first, second) =>
    new Date(second.BreachDate!).getTime() -
    new Date(first.BreachDate!).getTime()
  )

  result.splice(0, Number(offset))
  result.splice(Number(limit))

  return new Response(
    JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
    status: haveIBeenPwnedData.status,
  })
}

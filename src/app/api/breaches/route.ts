import { getLeakedDataFromHIBP } from "@/services/leakedDataServices"
import SearchParams from "@/utilities/SearchParams"
import Mapper from "@/utilities/Mapper"
import Query from "@/utilities/Query"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = new SearchParams(request)
    const take = searchParams.number("take", 12)
    const page = searchParams.number("page", 0)
    const platformOnly = searchParams.boolean("platformOnly")

    const leakedData = await getLeakedDataFromHIBP()

    if (!leakedData.ok) return NextResponse.json(
      { error: "Failed to fetch data from HIBP" },
      { status: leakedData.status }
    )

    const query = new Query(await leakedData.json())

    const result = (platformOnly
      ? query.map(Mapper.toHIBPwnedPlatformName).sort("localeCompare", "asc")
      : query.map(Mapper.toMinifiedHIBPwnedItem).sort((first, second) => Number(
        new Date(second.BreachDate).getTime() -
        new Date(first.BreachDate).getTime()
      ))
    ).paginated(page, take)

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
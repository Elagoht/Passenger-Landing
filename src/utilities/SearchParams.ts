import { NextRequest } from "next/server"

class SearchParams {
  private searchParams: URLSearchParams

  public constructor(request: NextRequest) {
    this.searchParams = new URLSearchParams(request.nextUrl.searchParams)
  }

  public number = (
    parameter: string,
    fallback: number = 0
  ): number => {
    const value = this.searchParams.get(parameter)
    return value
      ? parseInt(value)
      : fallback
  }

  public boolean = (
    parameter: string
  ): boolean => {
    const value = this.searchParams.get(parameter)
    return value === "true" || value === "1"
  }

  public get = (
    parameter: string
  ): string => {
    return this.searchParams.get(parameter) || ""
  }
}

export default SearchParams
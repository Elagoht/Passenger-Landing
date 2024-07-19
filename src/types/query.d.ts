declare type Paginated<T> = {
  readonly data: T[]
  readonly got: number
  readonly page: number
  readonly take: number
  readonly total: number
}
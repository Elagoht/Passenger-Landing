class Query<DataType> {
  public data: DataType[]

  public constructor(data: DataType[]) {
    this.data = data
  }

  public paginated = (
    page: number,
    take: number
  ): Paginated<DataType> => {
    const wanted = this.data.slice(
      take === -1
        ? 0
        : page * take,
      take === -1
        ? undefined
        : (page + 1) * take
    )
    return {
      data: wanted,
      got: wanted.length,
      page,
      take,
      total: this.data.length
    }
  }

  public sort(key: keyof DataType, order: "asc" | "desc"): this
  public sort(callback: (first: DataType, second: DataType) => number): this

  public sort(
    keyOrCallback: keyof DataType | ((first: DataType, second: DataType) => number),
    order: "asc" | "desc" = "asc"
  ): this {
    if (typeof keyOrCallback === "function") {
      this.data.sort(keyOrCallback)
    } else {
      this.data.sort((first, second) =>
        (order === "asc" ? 1 : -1) * (
          Number(first[keyOrCallback]) - Number(second[keyOrCallback])
        )
      )
    }
    return this
  }
  public filter = (
    criteria: (item: DataType) => boolean
  ): this => {
    this.data = this.data.filter(item =>
      criteria(item)
    )
    return this
  }

  public search = (
    key: keyof DataType,
    value: string
  ): this => {
    this.data = this.data.filter(item =>
      String(item[key]).toLowerCase().includes(value.toLowerCase())
    )
    return this
  }

  public map<MappedType>(
    mapper: (item: DataType) => MappedType
  ): Query<MappedType> {
    return new Query(this.data.map(item =>
      mapper(item)
    ))
  }

  public toList = (): DataType[] => this.data

  public first = (): DataType => this.data[0]

  public last = (): DataType => this.data[this.data.length - 1]

  public count = (): number => this.data.length

  public isEmpty = (): boolean => this.data.length === 0

  public stringify = (): string => JSON.stringify(this.data)
}

export default Query

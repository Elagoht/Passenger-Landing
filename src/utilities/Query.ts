class Query<DataType> {
  public data: DataType[]

  public constructor(data: DataType[]) {
    this.data = data
  }

  public paginated = (
    page: number,
    take: number
  ): Paginated<DataType> => ({
    data: this.toList().slice(
      page * take,
      take === -1
        ? undefined
        : (page + 1) * take
    ),
    got: this.toList().slice(
      page * take,
      (page + 1) * take
    ).length,
    page,
    take,
    total: this.data.length
  })

  public sort = (
    key: keyof DataType,
    order: "asc" | "desc"
  ): this => {
    this.data.sort((first, second) =>
      (order === "asc" ? 1 : -1) * (
        Number(first[key]) - Number(second[key])
      )
    )
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

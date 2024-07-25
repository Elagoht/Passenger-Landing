declare type DocMetaData = {
  readonly title: string
  readonly description: string
  readonly keywords: string
  readonly authors: string
}

declare type Article = {
  readonly slug: string
  readonly metadata: DocMetaData
  readonly content: string
  readonly next: string | null
  readonly prev: string | null
}
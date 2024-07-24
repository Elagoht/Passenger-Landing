import getArticles from "@/articles"
import DocsPageButtons from "@/components/docs/DocsPageButtons"
import "@/design/article.css"
import "@/design/highlight.css"
import convertMarkdownToHtml from "@/lib/markdown/converter"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { FC } from "react"

interface IDocsPageProps {
  readonly params: {
    slug: string
  }
}

export const generateMetadata = async ({ params: { slug } }: IDocsPageProps): Promise<Metadata> => {
  const article = (await getArticles()).find((article) => article.slug === slug)
  if (!article) notFound()

  return {
    title: article.metadata.title,
    description: article.metadata.description,
    keywords: article.metadata.keywords,
    authors: article.metadata.authors
      .split(",")
      .map((author) => ({ name: author })),
  }
}

export const generateStaticParams = async (): Promise<IDocsPageProps[]> => (
  await getArticles()).map(({ slug }) => ({ params: { slug } }))

const DocsPage: FC<IDocsPageProps> = async ({ params }) => {
  const articles = await getArticles()
  const article = articles.find((article) => article.slug === params.slug)
  if (!article) notFound()

  const next = articles.find((next) => next.slug === article.next)
  const prev = articles.find((prev) => prev.slug === article.prev)

  return <>
    <article dangerouslySetInnerHTML={{
      __html: convertMarkdownToHtml(article.content)
    }} />

    <DocsPageButtons
      next={next ? {
        title: next.metadata.title,
        href: `/docs/${article.next}`
      } : undefined}
      prev={prev ? {
        title: prev.metadata.title,
        href: article.prev === "introduction"
          ? "/docs"
          : `/docs/${article.prev}`
      } : undefined}
    />
  </>
}

export default DocsPage

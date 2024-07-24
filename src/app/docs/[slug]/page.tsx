import getArticles from "@/articles"
import convertMarkdownToHtml from "@/lib/markdown/converter"
import { FC } from "react"
import "@/design/article.css"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import DocsPageButtons from "@/components/docs/DocsPageButtons"

interface IDocsPageProps {
  readonly params: {
    slug: string
  }
}

export const generateMetadata = ({ params: { slug } }: IDocsPageProps): Metadata => {
  const article = getArticles().find((article) => article.slug === slug)
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

export const generateStaticParams = (): IDocsPageProps[] => getArticles()
  .map(({ slug }) => ({ params: { slug } }))

const DocsPage: FC<IDocsPageProps> = ({ params }) => {
  const articles = getArticles()
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
        href: `/docs/${article.prev}`
      } : undefined}
    />
  </>
}

export default DocsPage

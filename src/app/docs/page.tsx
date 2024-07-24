import getArticles from "@/articles"
import DocsPageButtons from "@/components/docs/DocsPageButtons"
import convertMarkdownToHtml from "@/lib/markdown/converter"
import { notFound } from "next/navigation"
import { FC } from "react"

const DocsMainPage: FC = () => {
  const articles = getArticles()
  const article = articles[0]
  if (!article) notFound()

  const next = articles.find((next) => next.slug === article.next)

  return <>
    <article dangerouslySetInnerHTML={{
      __html: convertMarkdownToHtml(article.content)
    }} />

    <DocsPageButtons next={next && {
      title: next.metadata.title,
      href: `/docs/${article.next}`
    }} />
  </>
}

export default DocsMainPage

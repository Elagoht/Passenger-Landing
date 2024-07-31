/**
 * Get articles from the generated articles.json
 * to use generating static pages.
 */
import { promises as fs } from "fs"
import path from "path"

const getArticles = async (): Promise<Article[]> => await fs
  .readFile(
    path.join(process.cwd(),
      "src/generated/articles.json"
    ), "utf-8"
  ).then((data) =>
    JSON.parse(data)
  )

export default getArticles

export const generateArticle = async (file: string): Promise<Article> => {
  const fileContent = await fs
    .readFile(path.join(process.cwd(), file), "utf-8")
    // Separator that every article has to have
    .then((content) => content.split("===="))
  return {
    slug: file
      .replace(/\d+-/g, "")
      .replace(".md", ""),
    metadata: fileContent[0]
      .split("\n")
      .slice(2) // Remove table header
      .reduce((data, line) => {
        const [key, value] = line.split("|")
        if (!key || !value) return data
        return {
          ...data,
          [key.trim()]: value.trim()
        }
      }, {}) as DocMetaData,
    content: fileContent[1] || ""
  } as Article
}
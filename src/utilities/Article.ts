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
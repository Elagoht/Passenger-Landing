/**
 * Generate articles from the markdown files
 * in the articles directory to use generating
 * static pages.
 */
import { promises as fs } from "fs"
import path from "path"

const getArticles = async () => {
  const articlesFiles = await fs
    .readdir(path.join(process.cwd(), "src/articles"))
    .then((files) => files.filter(
      (file) => file.endsWith(".md"))
    )

  const articles = articlesFiles.map(async (file, index) => {
    const fileContent = await fs
      .readFile(`./src/articles/${file}`, "utf-8")
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
            [key.trim() as keyof DocMetaData]: value.trim()
          }
        }, {} as DocMetaData),
      content: fileContent[1] || "",
      next: articlesFiles[index + 1]
        ?.replace(/\d+-/g, "")
        ?.replace(".md", "")
        || null,
      prev: articlesFiles[index - 1]
        ?.replace(/\d+-/g, "")
        ?.replace(".md", "")
        || null
    }
  })

  return Promise.all(articles)
}

export default getArticles
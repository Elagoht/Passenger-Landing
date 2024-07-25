import { promises as fs } from "fs"
import path from "path"

export const generateArticles = async () => {
  const cwd = process.cwd()

  const articlesFiles = await fs
    .readdir(path.join(cwd, "articles"))
    .then((files) => files.filter(
      (file) => file.endsWith(".md"))
    )

  const articles = articlesFiles.map(async (file, index) => {
    const fileContent = await fs
      .readFile(path.join(cwd, "articles", file), "utf-8")
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
        }, {}),
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

  const processedArticle = await Promise.all(articles)

  await fs.mkdir(
    path.join(cwd, "src/generated"),
    { recursive: true }
  ).then(() => fs.writeFile(
    path.join(cwd, "src/generated/articles.json"),
    JSON.stringify(processedArticle, null, 2)
  ))
}

generateArticles()
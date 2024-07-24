/**
 * Generate articles from the markdown files
 * in the articles directory to use generating
 * static pages.
 */
import fs from "fs"

const getArticles = () => {
  const articles = fs
    .readdirSync(`${process.cwd()}/src/articles`)
    .filter((file) => file.endsWith(".md"))

  return articles.map((file, index) => {
    const fileContent = fs
      .readFileSync(`./src/articles/${file}`, "utf-8")
      .split("====") // Separator that every article has to have
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
      next: articles[index + 1]
        ?.replace(/\d+-/g, "")
        ?.replace(".md", "")
        || null,
      prev: articles[index - 1]
        ?.replace(/\d+-/g, "")
        ?.replace(".md", "")
        || null
    }
  })
}

export default getArticles
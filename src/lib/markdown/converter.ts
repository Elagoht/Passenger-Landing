import hljs from "highlight.js"
import MarkdownIt from "markdown-it"
import anchor from "markdown-it-anchor"
import expandable from "markdown-it-expandable"
import footnote from "markdown-it-footnote"
import mark from "markdown-it-mark"
import sub from "markdown-it-sub"
import sup from "markdown-it-sup"

const convertMarkdownToHtml = (content: string): string => {

  const { escapeHtml } = new MarkdownIt().utils

  const converter = new MarkdownIt({
    highlight: function (str: string, lang?: string) {
      let content: string = ""
      if (lang && hljs.getLanguage(lang))
        try { content = hljs.highlight(str, { language: lang }).value }
        catch { content = escapeHtml(str) }
      else content = escapeHtml(str)
      return `<pre class="hljs">${content}</pre>`
    },
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
    quotes: "“”‘’",
  }).use(sup)
    .use(sub)
    .use(footnote)
    .use(mark)
    .use(expandable)
    .use(anchor, {
      permalink: anchor.permalink.headerLink({ safariReaderFix: true }),
    })

  return converter.render(content)
}

export default convertMarkdownToHtml
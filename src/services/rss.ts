// @ts-ignore
import Parser from 'rss-parser'
const parser = new Parser({
  headers: { 'Access-Control-Allow-Origin': '*' },
})

const domParser: any = typeof DOMParser !== 'undefined' && new DOMParser()

export const fetchRss = async (lang: string) => {
  let feeds
  try {
    feeds = await parser.parseURL(`https://ver-1-0.net/latest.${lang}.xml`)
  } catch (e) {
    console.error(e)
    return e
  }
  return feeds
}

export const fetchThumbnails = async (items: any[]) => {
  const results = await Promise.all(
    items.map(async item => {
      const response = await fetch(item.link)
      const html = await response.text()
      const doc = domParser.parseFromString(html, 'text/html')
      const thumbnail = doc.head.querySelector("meta[property='og:image']")
        .content
      return {
        ...item,
        thumbnail,
      }
    })
  )
  return results
}

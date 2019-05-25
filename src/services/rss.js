import Parser from 'rss-parser'
const parser = new Parser({
  headers: { 'Access-Control-Allow-Origin': '*' },
})

export const fetch = async (onSuccess, onError) => {
  let feeds;
  try {
    feeds = await parser.parseURL('https://ver-1-0.net/rss.xml')
  } catch (e) {
    onError(e)
    return e
  }
  onSuccess(feeds)
  return feeds
}

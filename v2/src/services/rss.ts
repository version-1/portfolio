import Parser from 'rss-parser'

const parser = new Parser({
  headers: { 'Access-Control-Allow-Origin': '*' },
  customFields: {
    item: ['thumbnailUrl', 'language']
  }
})

const domParser: any = typeof DOMParser !== 'undefined' && new DOMParser()

export const fetchRss = async (lang: string) => {
  return await parser.parseURL(`https://ver-1-0.net/latest.${lang}.xml`)
}

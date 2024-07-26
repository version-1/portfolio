type Article = {
  guid: string;
  title: string;
  pubDate: string;
  description: string;
  link: string;
  thumbnailUrl: string;
  "content:encoded": string;
  language: string;
};

type Result = {
  items: Article[];
  total: number;
};

export default class Parser {
  private readonly url: string;
  private readonly limit: number;

  constructor({ url, limit }: { url: string; limit: number }) {
    this.url = url;
    this.limit = limit;
  }

  public async fetch(): Promise<Result> {
    const res = await fetch(this.url);
    const json = await res.text();

    const items = this.parse(json);

    return {
      items,
      total: items.length,
    };
  }

  private parse(json: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(json, "application/xml");
    const ele = doc.querySelectorAll("item");

    const list = Array.from(ele).slice(0, this.limit);

    return list.map((item: Element) => {
      return Array.from(item.children).reduce<Article>(
        (acc: Article, it: Element) => {
          return { ...acc, [it.tagName]: it.textContent || "" };
        },
        {
          guid: "",
          title: "",
          pubDate: "",
          description: "",
          link: "",
          thumbnailUrl: "",
          "content:encoded": "",
          language: "",
        } as Article,
      );
    });
  }
}

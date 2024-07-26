import Parser from "lib/rssParser";

const client = {
  ja: new Parser({
    url: "https://ver-1-0.net/latest.ja.xml",
    limit: 10,
  }),

  en: new Parser({
    url: "https://ver-1-0.net/latest.en.xml",
    limit: 10,
  }),
};

export const fetchRss = async (lang: 'ja' | 'en') => {
  return client[lang].fetch();
};


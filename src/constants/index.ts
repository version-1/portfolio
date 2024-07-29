const channels: { [key: string]: Channel } = {
  top: {
    key: "top",
    name: "top",
    url: "/",
    description:
      "Welcome to my personal portfolio website! Here, you can explore my profile and see my work. Enjoy your visit!",
  },
  experience: {
    key: "experience",
    name: "experience",
    url: "/channels/experience",
    description: "My work experience is summarized here.",
  },
  projects: {
    key: "projects",
    name: "projects",
    url: "/channels/projects",
    description: "My private projects are summarized here.",
  },
  oss: {
    key: "oss",
    name: "oss",
    url: "/channels/oss",
    description: "My open source projects are summarized here.",
  },
  "blog-en": {
    key: "blog-en",
    name: "blog-en",
    url: "/channels/blog/en",
    description: "Recent posts in my blog in english is posted here.",
  },
  "blog-ja": {
    key: "blog-ja",
    name: "blog-ja",
    url: "/channels/blog/ja",
    description: "Recent posts in my blog in japanese is posted here.",
  },
};

type ChannelKey = keyof typeof channels;
export type Channel = {
  key: ChannelKey;
  name: string;
  url: string;
  description: string;
  notify?: boolean;
};

const dm = {
  you: {
    key: "you",
    name: "you",
    url: "/channels/you",
    description: "Here is your private chat space.",
  },
  me: {
    key: "me",
    name: "jiro",
    url: "/channels/me",
    description: 'You can free to send "logical" message to me.',
    // notify: true
  },
};

const allChannels = { ...channels, ...dm };
const allChannelKeys = Object.keys(allChannels);
const notifableChannels = ["me"];

const messages = allChannelKeys.reduce(
  (acc, key) => ({ ...acc, [key]: [] }),
  {},
);
const page = { ...channels.top, key: "top" };
const modal = {
  show: false,
  title: "",
  header: null,
  content: null,
};

export default {
  author: "Jiro",
  origin:
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:8000",
  development: process.env.NODE_ENV === "development",
  production: process.env.NODE_ENV === "production",
  slackWebhookURL:
    "https://hooks.slack.com/services/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",
  headerHeight: "100px",
  sidebarWidth: "256px",
  sidebarLeftWidth: "80px",
  sidebarRightWidth: "176ox",
  url: {
    papyrus: "https://papyrus-app.org",
    blog: "https://ver-1-0.net",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/jiro-onodera-1b3766145",
    twitter: "https://twitter.com/version1_2017",
  },
  channels,
  dm,
  allChannels,
  allChannelKeys,
  notifableChannels,
  messages,
  page,
  modal,
};

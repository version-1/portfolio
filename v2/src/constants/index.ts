const channels = {
  top: {
    name: 'top',
    url: '/',
    description:
      'This is my portfolio page.About my works are summarized in left pane. enjoy my site !!!!!',
  },
  carrier: {
    name: 'carrier',
    url: '/channels/carrier',
    description: 'This is page about my carrier.',
  },
  projects: {
    name: 'projects',
    url: '/channels/projects',
    description: 'My own project is listed.',
  },
  oss: {
    name: 'oss',
    url: '/channels/oss',
    description: 'This is my OSS work summary',
  },

  'blog-ja': {
    name: 'blog-ja',
    url: '/channels/blog/ja',
    description: 'Recent posts in my blog is posted here.',
  },
  'blog-en': {
    name: 'blog-en',
    url: '/channels/blog/en',
    description: 'Recent posts in my blog is posted here.',
  },
}

const dm = {
  you: {
    name: 'you',
    url: '/channels/you',
    description:
      'Here is your private chat space. Free to post what you think.',
  },
  me: {
    name: 'me',
    url: '/channels/me',
    description: 'You can free to send message to me.',
    notify: true
  },
}

const allChannels = { ...channels, ...dm }
const allChannelKeys = Object.keys(allChannels)
const notifableChannels = ['me']

const messages = allChannelKeys.reduce(
  (acc, key) => ({ ...acc, [key]: [] }),
  {}
)
const page = { ...channels.top, key: 'top' }
const modal = {
  show: false,
  title: '',
  header: null,
  content: null,
}

export default {
  author: 'version-1',
  origin: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:8000',
  development: process.env.NODE_ENV === 'development',
  production: process.env.NODE_ENV === 'production',
  slackWebhookURL: 'https://hooks.slack.com/services/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',
  headerHeight: '100px',
  sidebarWidth: '256px',
  sidebarLeftWidth: '80px',
  sidebarRightWidth: '176ox',
  url: {
    papyrus: 'https://papyrus-app.org',
    blog: 'https://ver-1-0.net',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/jiro-onodera-1b3766145',
    twitter: 'https://twitter.com/version1_2017'
  },
  channels,
  dm,
  allChannels,
  allChannelKeys,
  notifableChannels,
  messages,
  page,
  modal
}

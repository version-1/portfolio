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
  works: {
    name: 'works',
    url: '/channels/works',
    description: 'Here is my work list. enjoy it.',
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
  channels,
  dm,
  allChannels,
  allChannelKeys,
  notifableChannels,
  messages,
  page,
  modal
}

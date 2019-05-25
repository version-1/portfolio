import React from 'react'
import { fetch } from 'services/rss'

const Context = React.createContext()

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
  blog: {
    name: 'blog',
    url: '/channels/blog',
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
    name: 'jjoo',
    url: '/channels/me',
    description: 'You can free to send message to me.',
  },
}

export const allChannels = { ...channels, ...dm }
export const channelKeys = Object.keys(channels)
export const dmKeys = Object.keys(dm)

const messages = channelKeys.reduce((acc, key) => ({ ...acc, [key]: [] }), {})
const page = { ...channels.top, key: 'top' }

const initialState = {
  page,
  channels,
  dm,
  articles: [],
  messages,
}
const mutations = {
  updatePage: function(page) {
    const [key, val] = Object.entries(allChannels).find(
      ([key, val]) => val.url === page.url
    )
    this.setState({ page, key })
  },
  updateArticles: function(articles) {
    this.setState({ articles })
  },
  postMessage: function(message) {
    const { key } = this.state.page
    const _messages = this.meesages[key]
    return [..._messages, message]
  },
  fetchRssFeedAsync: async function() {
    await fetch(feeds => this.mutations.updateArticles(feeds.items), console.error)
  },
}

export class Provider extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState
    this.mutations = {}
    Object.entries(mutations).forEach(([key, value]) => {
      this.mutations[key] = value.bind(this)
    })
  }

  get value() {
    return {
      state: this.state,
      mutations: this.mutations,
    }
  }

  render() {
    const { children } = this.props

    return <Context.Provider value={this.value}>{children}</Context.Provider>
  }
}

export default Context

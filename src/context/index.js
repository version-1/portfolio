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

const allChannels = { ...channels, ...dm }
const channelKeys = Object.keys(channels)
const allChannelKeys = Object.keys(allChannels)
const dmKeys = Object.keys(dm)

const messages = allChannelKeys.reduce((acc, key) => ({ ...acc, [key]: [] }), {})
const page = { ...channels.top, key: 'top' }
const modal = {
  show: false,
  title: '',
  header: null,
  content: null,
}

const initialState = {
  page,
  channels,
  dm,
  articles: [],
  messages,
  modal,
  isLoading: true
}
const mutations = {
  updatePage: function(page) {
    const [key, val] = Object.entries(allChannels).find(
      ([key, val]) => val.url === page.url
    )
    this.setState({ page: { ...page, key } })
  },
  updateArticles: function(articles) {
    this.setState({ articles })
  },
  postMessage: function(message) {
    const { key } = this.state.page
    const _messages = this.state.messages[key]
    const newMessages = [..._messages, message]
    this.setState({ messages: { ...this.state.messages, [key]: newMessages } })
  },
  fetchRssFeedAsync: async function() {
    await fetch(
      feeds => this.mutations.updateArticles(feeds.items),
      console.error
    )
  },
  startLoading: function () {
    this.setState({ isLoading: true })
  },
  endLoading: function () {
    this.setState({ isLoading: false })
  },
  showModal: function ({ title, content }) {
    const modal = { show: true, title, content }
    this.setState({ modal })
  },
  hideModal: function () {
    this.setState({ modal })
  },
}

const getters = {
  messages: function() {
    const { key } = this.state.page
    return this.state.messages[key]
  }
}

export class Provider extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState
    this.mutations = {}
    this.getters = {}
    Object.entries(mutations).forEach(([key, value]) => {
      this.mutations[key] = value.bind(this)
    })
    Object.entries(getters).forEach(([key, value]) => {
      this.getters[key] = value.bind(this)
    })
  }

  get value() {
    return {
      state: this.state,
      mutations: this.mutations,
      getters: this.getters
    }
  }

  render() {
    const { children } = this.props

    return <Context.Provider value={this.value}>{children}</Context.Provider>
  }
}

export default Context

import React from 'react'
import moment from 'moment'
import { fetchRss, fetchThumbnails } from 'services/rss'

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
    name: 'me',
    url: '/channels/me',
    description: 'You can free to send message to me.',
  },
}

const allChannels = { ...channels, ...dm }
const channelKeys = Object.keys(channels)
const allChannelKeys = Object.keys(allChannels)
const dmKeys = Object.keys(dm)

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

const initialState = {
  page,
  channels,
  dm,
  articles: {
    queue: [],
    list: [],
  },
  messages,
  modal,
  loading: {
    page: false,
    content: false,
  },
  isReady: false,
}
const mutations = {
  updatePage: function(page) {
    const [key, val] = Object.entries(allChannels).find(
      ([key, val]) => val.url === page.url
    )
    this.setState({ page: { ...page, key } })
  },
  updateArticles: function(items) {
    const { list } = this.state.articles
    this.setState({ articles: { queue: items, list } })
  },
  addArticleList: function(list) {
    const { queue, list: prevList } = this.state.articles
    const links = list.map(article => article.link)
    const _queue = queue.filter(item => !links.includes(item.link))
    const newList = [...prevList, ...list]
    const sortedList = newList.sort(
      (a, b) => moment(a.pubDate).unix() - moment(b.pubDate).unix()
    )
    this.setState(
      { articles: { queue: _queue, list: sortedList } },
      () => this.mutations.scrollBottom()
    )
  },
  postMessage: function(message) {
    const { key } = this.state.page
    const _messages = this.state.messages[key]
    const newMessages = [..._messages, message]
    this.setState({ messages: { ...this.state.messages, [key]: newMessages } })
    setTimeout(() => this.mutations.scrollBottom(), 100)
  },
  fetchRssFeedAsync: async function() {
    const {
      updateArticles,
      addArticleList,
      startLoading,
      stopLoading,
    } = this.mutations
    startLoading('content')
    const { items } = await fetchRss()
    this.mutations.updateArticles(items)
    const count = Math.ceil(items.length / 10)
    new Array(count).fill('').map(async (_, index) => {
      const group = items.slice(index * 10, (index + 1) * 10)
      const _group = await fetchThumbnails(group, console.error)
      const sleep = await setTimeout(() => {}, 3000)
      addArticleList(_group)
      if (index === 0) {
        stopLoading('content')
      }
    })
  },
  showModal: function({ title, content }) {
    const modal = { show: true, title, content }
    this.setState({ modal })
  },
  hideModal: function() {
    this.setState({ modal })
  },
  startLoading: function(type) {
    const { loading } = this.state
    this.setState({ loading: { ...loading, [type]: true } })
  },
  stopLoading: function(type) {
    const { loading } = this.state
    this.setState({ loading: { ...loading, [type]: false } })
  },
  endLoading: function() {
    this.setState({ isLoading: false })
  },
  init: function(path) {
    if (!this.state.isReady) {
      this.mutations.startLoading('page')
      setTimeout(() => {
        this.mutations.stopLoading('page')
        this.setState({ isReady: true })
      }, 1000)
    }

    if (!path) {
      this.mutations.updatePage(channels.top)
    } else {
      const [key] = path.split('/').slice(-1)
      this.mutations.updatePage(allChannels[key])
    }
  },
  scrollBottom() {
    const body = document.body.querySelector('.content-body')
    if (body) {
      body.scrollTop = body.scrollHeight
    }
  },
}

const getters = {
  messages: function() {
    const { key } = this.state.page
    return this.state.messages[key]
  },
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
      getters: this.getters,
    }
  }

  render() {
    const { children } = this.props

    return <Context.Provider value={this.value}>{children}</Context.Provider>
  }
}

export default Context

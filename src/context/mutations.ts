import moment from 'moment'
import * as slack from 'services/slack'
import data from 'context/data'

const { allChannels, notifableChannels, modal, channels } = data

export default {
  updatePage: function(page) {
    const [key] = Object.entries(allChannels).find(
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
    this.setState({ articles: { queue: _queue, list: sortedList } }, () =>
      this.mutations.scrollBottom()
    )
  },
  postMessage: function(message) {
    const { key } = this.state.page
    const _messages = this.state.messages[key]
    const newMessages = [..._messages, message]
    if (notifableChannels.includes(key)) {
      slack.notify(message)
    }
    this.setState({ messages: { ...this.state.messages, [key]: newMessages } })
    setTimeout(() => this.mutations.scrollBottom(), 100)
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
  toggleSidebar() {
    const { mobile } = this.state
    this.setState({ mobile: { showSidebar: !mobile.showSidebar } })
  },
}

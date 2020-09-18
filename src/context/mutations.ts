import * as slack from 'services/slack'
import data from 'context/data'

const { allChannels, notifableChannels, modal, channels } = data

export default {
  updatePage: function (page) {
    const [key] = Object.entries(allChannels).find(
      ([key, val]) => val.url === page.url
    )
    this.setState({ page: { ...page, key } })
  },
  postMessage: function (message) {
    const { key } = this.state.page
    const _messages = this.state.messages[key]
    const newMessages = [..._messages, message]
    if (notifableChannels.includes(key)) {
      slack.notify(message)
    }
    this.setState({ messages: { ...this.state.messages, [key]: newMessages } })
    setTimeout(() => this.mutations.scrollBottom(), 100)
  },
  showModal: function ({ title, content }) {
    const modal = { show: true, title, content }
    this.setState({ modal })
  },
  hideModal: function () {
    this.setState({ modal })
  },
  startLoading: function (type) {
    const { loading } = this.state
    this.setState({ loading: { ...loading, [type]: true } })

    return () => this.setState({ loading: { ...loading, [type]: false } })
  },
  init: function (path) {
    if (!this.state.isReady) {
      const end = this.mutations.startLoading('page')
      setTimeout(() => {
        end()
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
  toggleSidebar() {
    const { mobile } = this.state
    this.setState({ mobile: { showSidebar: !mobile.showSidebar } })
  },
}

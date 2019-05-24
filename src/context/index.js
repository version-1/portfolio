import React from 'react'

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

export const channelKeys = Object.keys(channels)
export const dmKeys = Object.keys(dm)

const initialState = {
  page: channels.top,
  channels,
  dm,
  articles: [],
}

export class Provider extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  updatePage = page => this.setState({ page })
  updateArticles = articles => this.setState({ articles })

  render() {
    const { children } = this.props

    return (
      <Context.Provider
        value={{
          state: this.state,
          updatePage: this.updatePage,
          updateArticles: this.updateArticles,
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default Context

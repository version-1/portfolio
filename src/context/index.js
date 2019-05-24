import React from 'react'

const Context = React.createContext()

const channels = [
  {
    text: 'top',
    to: '/',
    description:
      'This is my portfolio page.About my works are summarized in left pane. enjoy my site !!!!!',
  },
  {
    text: 'about-me',
    to: '/channels/AboutMe',
    description: 'This is page about my carrier.',
  },
  {
    text: 'works',
    to: '/channels/Works',
    description: 'Here is my work list. enjoy it.',
  },
  {
    text: 'blog',
    to: '/channels/Blog',
    description: 'Recent posts in my blog is posted here.',
  },
]

const dm = [
  {
    text: 'you',
    to: '/channels/You',
    description:
      'Here is your private chat space. Free to post what you think.',
  },
  {
    text: 'to jjoo',
    to: '/channels/ToMe',
    description: 'You can free to send message to me.',
  },
]

const initialState = {
  page: {
    title: 'Top',
    url: '/',
    description: channels[0].description
  },
  channels,
  dm,
}

export class Provider extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  updatePage = page => this.setState({ page })

  render() {
    const { children } = this.props

    return (
      <Context.Provider
        value={{ state: this.state, updatePage: this.updatePage }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default Context

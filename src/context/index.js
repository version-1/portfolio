import React from 'react'

const Context = React.createContext()

const channels = [
  {
    name: 'top',
    url: '/',
    description:
      'This is my portfolio page.About my works are summarized in left pane. enjoy my site !!!!!',
  },
  {
    name: 'carrier',
    url: '/channels/carrier',
    description: 'This is page about my carrier.',
  },
  {
    name: 'works',
    url: '/channels/works',
    description: 'Here is my work list. enjoy it.',
  },
  {
    name: 'blog',
    url: '/channels/blog',
    description: 'Recent posts in my blog is posted here.',
  },
]

const dm = [
  {
    name: 'you',
    url: '/channels/you',
    description:
      'Here is your private chat space. Free to post what you think.',
  },
  {
    name: 'jjoo',
    url: '/channels/me',
    description: 'You can free to send message to me.',
  },
]

const [defaultChannel] = channels

const initialState = {
  page: defaultChannel,
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

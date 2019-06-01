import React from 'react'
import mutations from 'context/mutations'
import getters from 'context/getters'
import data from 'context/data'

const Context = React.createContext()
const { page, channels, dm, messages, modal } = data

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
  mobile: {
    showSidebar: false,
    height: null,
  },
  loading: {
    page: false,
    content: false,
  },
  isReady: false,
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

  componentDidMount() {
    if (window && this.getters.mobile()) {
      const height = window.innerHeight
      const vh = height * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      const { mobile } = this.state
      this.setState({ mobile: { ...mobile, height } })
    }
  }

  get value() {
    return {
      state: this.state,
      mutations: this.mutations,
      getters: this.getters,
    }
  }

  get layout() {
    if (!window) {
      return
    }
    return window.parent.screen
  }

  render() {
    const { children } = this.props

    return <Context.Provider value={this.value}>{children}</Context.Provider>
  }
}

export default Context

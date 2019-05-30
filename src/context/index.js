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

  get value() {
    return {
      state: this.state,
      mutations: this.mutations,
      getters: this.getters,
    }
  }

  get layout() {
    if (!window) {
      return false
    }
    return window.parent.screen
  }

  render() {
    const { children } = this.props

    return <Context.Provider value={this.value}>{children}</Context.Provider>
  }
}

export default Context

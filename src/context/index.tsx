import React from 'react'
import mutations from 'context/mutations'
import getters from 'context/getters'
import data from 'context/data'
import { breakpoints } from 'components/styles'

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

const Context = React.createContext({
  state: initialState,
  getters: getters,
  mutations: mutations,
})

export class Provider extends React.Component<any, typeof initialState> {
  mutations: any = {}
  getters: any = {}
  constructor(props: any) {
    super(props)

    this.state = initialState
    Object.entries(mutations).forEach(([key, value]) => {
      this.mutations[key] = value.bind(this)
    })
    Object.entries(getters).forEach(([key, value]) => {
      this.getters[key] = value.bind(this)
    })
  }

  componentDidMount() {
    if (window && this.mobile) {
      const height = window.innerHeight
      const vh = height * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      const { mobile } = this.state
      this.setState({ mobile: { ...mobile, height } })
    }
  }

  get mobile() {
    if (!window) {
      return false
    }
    return window.parent.screen.width <= breakpoints.mobile
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

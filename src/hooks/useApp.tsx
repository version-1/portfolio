import React, { useEffect, useState } from 'react'
import data from 'context/data'
import { breakpoints } from 'components/styles'
import { scrollBottom } from '../utils'
import * as slack from 'services/slack'

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
  mobileLayout: {
    showSidebar: false,
    height: 0,
  },
  isReady: false,
}

const Context = React.createContext({
  state: initialState,
  postMessage: (_message: string) => {},
  showModal: () => () => {},
  hideModal: () => {},
  toggleSidebar: () => {},
  messages: [],
})

const { allChannels } = data

export const useApp = () => {
  const [_page, setPage] = useState<typeof page>()
  const [_messages, setMessages] = useState<typeof messages>({})
  const [_mobileLayout, setMobileLayout] = useState<
    typeof initialState.mobileLayout
  >()
  const [_modal, setModal] = useState<typeof initialState.modal>()
  const [_ready, setReady] = useState<boolean>()

  const mobile = window
    ? window.parent.screen.width <= breakpoints.mobile
    : false

  useEffect(() => {
    setPage(initialState.page)
    setMessages(initialState.messages)
    setMobileLayout(initialState.mobileLayout)
    setReady(initialState.isReady)
    if (window && mobile) {
      const height = window.innerHeight
      const vh = height * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      setMobileLayout({ ..._mobileLayout, height })
    }

    const pathname = window ? window.location.pathname : undefined
    if (!pathname) {
      updatePage(channels.top)
    } else {
      const page = Object.values(allChannels).find(
        channel => channel.url === pathname
      )
      updatePage(page)
    }
    setReady(true)
  }, [])

  const updatePage = (page: any) => {
    if (!page) {
      return
    }
    const [key] = Object.entries(allChannels).find(
      ([key, val]) => val.url === page.url
    )
    setPage({ ...page, key })
  }

  const postMessage = (message: string) => {
    const { key } = _page
    const prevMessages = _messages[key]
    const newMessages = [...prevMessages, message]
    if (_page.notify) {
      slack.notify(message)
    }
    setMessages({ ..._messages, [key]: newMessages })
    setTimeout(() => scrollBottom(), 100)
  }

  const showModal = ({ title, content }) => {
    const newState = { show: true, title, content }
    setModal(newState)
    return () => setModal(modal)
  }

  const hideModal = () => {
    setModal(data.modal)
  }

  const toggleSidebar = () => {
    setMobileLayout({
      ..._mobileLayout,
      showSidebar: !_mobileLayout.showSidebar,
    })
  }

  const value = {
    ready: _ready,
    state: {
      page: _page,
      modal: _modal,
      channels,
      messages: _messages,
      dm,
      mobile: _mobileLayout,
    },
    messages: (_messages as any)[page?.key],
    updatePage,
    postMessage,
    showModal,
    hideModal,
    toggleSidebar,
  }

  return {
    value,
    Provider: Context.Provider,
  }
}

export default Context

import React from 'react'

const Context = React.createContext()

const initialState = {
  page: {
    title: 'Top',
    url: '/',
  },
}

export class Provider extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  updatePage = page => this.setState({ page })

  render() {
    const { children } = this.props
    const { page } = this.state

    return (
      <Context.Provider value={{ page, updatePage: this.updatePage }}>
        {children}
      </Context.Provider>
    )
  }
}

export default Context

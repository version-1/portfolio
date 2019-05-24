import React from 'react'

const Context = React.createContext()

export class Provider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      app: { count: 1 },
    }
  }

  increment = () => this.setState({ count: this.state.count + 1 })
  render() {
    const { children } = this.props
    const { app } = this.state

    return (
      <Context.Provider value={{ app, increment: this.increment }}>
        {children}
      </Context.Provider>
    )
  }
}

export default Context

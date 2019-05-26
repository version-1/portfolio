import React from 'react'
import styled from 'styled-components'
import blogThumbnail from 'assets/ver-1-0.net.thumbnail.png'

import Context from 'context'
import { More } from 'components/styles'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'
import Blog from 'components/templates/works/Blog'
import Snake from 'components/templates/works/Snake'
import Kurouto from 'components/templates/works/Kurouto'
import Smama from 'components/templates/works/Smama'

const Thumbnail = styled.img`
  cursor: pointer;
  width: 320px;
  margin: 16px 0px;
`

class Component extends React.PureComponent {
  componentDidMount() {
    const {
      mutations: { init },
    } = this.props.context
    const path = this.props.props['*']
    init(path)
  }

  onClickBlog = () => {
    this.props.context.mutations.showModal({ title: 'Work', content: <Blog /> })
  }

  onClickSnake = () => {
    this.props.context.mutations.showModal({
      title: 'Work',
      content: <Snake />,
    })
  }

  onClickKurouto = () => {
    this.props.context.mutations.showModal({
      title: 'Work',
      content: <Kurouto />,
    })
  }

  onClickSmama = () => {
    this.props.context.mutations.showModal({
      title: 'Work',
      content: <Smama />,
    })
  }

  render() {
    if (!this.props.context) {
      // block beause error occurs on build
      return <></>
    }
    const { getters, state } = this.props.context

    return (
      <Page state={state} getters={getters}>
        <Message
          title="My Blog implemented by Gatsbyjs"
          body={
            <>
              Blog's Theme is engineering, work for freelnce, travel. I designed
              UI and developed and wrote all articles in this blog.
              <Thumbnail
                onClick={this.onClickBlog}
                src={blogThumbnail}
                alt="blog thumbanail"
              />
              <p>
                <More onClick={this.onClickBlog}>more...</More>
              </p>
            </>
          }
        />
        <Message
          title="React Snake Game"
          body={
            <>
              <p>
                Well-known Snake Game implemented with React. you can play it on
                web.
              </p>
              <Thumbnail
                onClick={this.onClickSnake}
                src="https://statics.ver-1-0.net/uploads/2018/06/20180627_react-snake-game-3/snake.png"
                alt="snake thumbanail"
              />
              <p>
                <More onClick={this.onClickSnake}>more...</More>
              </p>
            </>
          }
        />
        <Message
          title="React Native Various Form"
          body={
            <>
              npm package. It provides some components for Input Form. You can
              implement Field, Form and Validator easily on React Native.
              <p>
                <a href="https://github.com/version-1/react-native-various-form">
                  more...
                </a>
              </p>
            </>
          }
        />
        <Message
          title="KUROUTO ACT"
          body={
            <>
              React Native application for real estate agent. They can output
              documents required on trade easily with this.
              <p>
                <More onClick={this.onClickKurouto}>more...</More>
              </p>
            </>
          }
        />
        <Message
          title="SMAMA"
          body={
            <>
              C to C Web Service. User can sale their used home appliances and
              buy them cheaper.
              <p>
                <More onClick={this.onClickSmama}>more...</More>
              </p>
            </>
          }
        />
      </Page>
    )
  }
}

export default props => (
  <Context.Consumer>
    {context => <Component props={props} context={context} />}
  </Context.Consumer>
)

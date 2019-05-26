import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import blogThumbnail from 'assets/ver-1-0.net.thumbnail.png'

import Context from 'context'
import { Body, More } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'
import Blog from 'components/templates/works/Blog'
import Snake from 'components/templates/works/Snake'
import colors from 'constants/colors'

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

  render() {
    const { mutations, getters, state } = this.props.context
    const { page } = state

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
              npm package.
              <p>
                <More>more...</More>
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
                <More>more...</More>
              </p>
            </>
          }
        />
        <Message
          title="SMAMA"
          body={
            <>
              C to C Web Service. User can sale their used home applicances and
              buy them cheaper.
              <p>
                <More>more...</More>
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

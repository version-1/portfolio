import React from 'react'
import blogThumbnail from 'assets/blog.png'
import snakeThumbnail from 'assets/snake.png'

import { More } from 'components/styles'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'
import Blog from 'components/templates/works/Blog'
import Snake from 'components/templates/works/Snake'
import Smama from 'components/templates/works/Smama'
import { Thumbnail } from 'components/styles/index'

const Component: React.FC = () => {
  const onClickBlog = () => {
    // this.props.context.mutations.showModal({ title: 'Work', content: <Blog /> })
  }

  const onClickSnake = () => {
    // this.props.context.mutations.showModal({
    //   title: 'Work',
    //   content: <Snake />,
    // })
  }

  const onClickSmama = () => {
    // this.props.context.mutations.showModal({
    //   title: 'Work',
    //   content: <Smama />,
    // })
  }

  return (
    <Page>
      <Message
        title="My Blog implemented by Gatsbyjs"
        body={
          <>
            <p>
              Blog's Theme is engineering, work for freelnce, travel. I designed
              UI and developed and wrote all articles in this blog.
            </p>
            <Thumbnail
              onClick={onClickBlog}
              src={blogThumbnail}
              alt="blog thumbanail"
            />
            <p>
              <More onClick={onClickBlog}>more...</More>
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
              onClick={onClickSnake}
              src={snakeThumbnail}
              alt="snake thumbanail"
            />
            <p>
              <More onClick={onClickSnake}>more...</More>
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
        title="SMAMA"
        body={
          <>
            C to C Web Service. User can sale their used home appliances and buy
            them cheaper.
            <p>
              <More onClick={onClickSmama}>more...</More>
            </p>
          </>
        }
      />
    </Page>
  )
}

export default Component

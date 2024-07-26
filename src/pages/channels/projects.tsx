import React from 'react'
import blogThumbnail from 'assets/works/blog.png'
import snakeThumbnail from 'assets/snake.png'
import papyrusThumbnail from 'assets/papyrus.png'

import { More } from 'components/styles'
import Message from 'components/domains/channel/message'
import Page from 'components/shared/templates/page'
import Papyrus from 'components/domains/works/papyrus'
import Blog from 'components/domains/works/blog'
import Snake from 'components/domains/works/snake'
import { Thumbnail } from 'components/styles/index'
import Modal from 'components/shared/templates/modal'

const Component: React.FC = () => {
  const onClickPapyrus = () => {
    Modal.show({ title: 'Work', content: <Papyrus /> })
  }
  const onClickBlog = () => {
    Modal.show({ title: 'Work', content: <Blog /> })
  }

  const onClickSnake = () => {
    Modal.show({ title: 'Work', content: <Snake /> })
  }
  return (
    <Page title="Projects">
      <Message
        title="Papyrus"
        body={
          <>
            <p>
              Desktop Markdown Memo application. It has no features to organize (category, note...)
              It is for organizing in your mind.
            </p>
            <Thumbnail
              onClick={onClickPapyrus}
              src={papyrusThumbnail}
              alt="Papyrus thumbanail"
            />
            <p>
              <More onClick={onClickPapyrus}>more...</More>
            </p>
          </>
        }
      />
      <Message
        title="My Blog implemented by Gatsbyjs"
        body={
          <>
            <p>
              Blog's Theme is engineering, work for freelnce, travel.
              Designed UI and developed from scratch.
              Wrote all articles in this blog.
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
    </Page>
  )
}

export default Component

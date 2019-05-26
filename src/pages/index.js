import React from 'react'
import { Link } from 'gatsby'

import Context from 'context'
import { H3, P, LI, Bold, More } from 'components/styles'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'

class Component extends React.PureComponent {
  componentDidMount() {
    const path = this.props.props['*']
    this.props.context.mutations.init(path)
  }

  render() {
    const { getters, state } = this.props.context
    const { channels } = state

    return (
      <Page state={state} getters={getters}>
        <Message
          title="Full Stack Engineer(React, React Native, Ruby on Rails)"
          body={
            <>
              <p></p>
              <LI>
                Programmer with skill of developping high quality and scalable
                web system. Be familiar With React and Ruby on Rails.{' '}
              </LI>
              <LI>
                Have Knowledge about React. Designed and Implemented my blog
                (with Gatsby), some React Native Applications and Web
                Applications.
              </LI>
              <LI>
                Keep looking for a better way for development. Take a action to
                improve for effective development. (while considering balance
                between speed and cost)
              </LI>
              <LI>
                Work with wide field of view. Have some experiences I managed
                small teams and review their design and code.{' '}
              </LI>
              <P>
                github:{' '}
                <a
                  href="https://github.com/version-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <More>https://github.com/version-1</More>
                </a>
              </P>
              <P>
                blog:{' '}
                <a
                  href="https://ver-1-0.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <More>https://ver-1-0.net</More>
                </a>
              </P>
            </>
          }
        />
        <Message
          title="Technolody Summary"
          body={
            <>
              <H3 fontSize={14}>Language:</H3>
              <P indent={20}>
                <Bold>JavaScript, Ruby</Bold>, GO, Kotlin, Java, PHP, SQL, HTML,
                CSS, Bash
              </P>
              <H3 fontSize={14}>FrameWork:</H3>
              <P indent={20}>
                <Bold>React, React Native, Ruby on Rails</Bold>, Vue, Gin,
                Laravel, CakePHP, Spring ,Laravel, CodeIgniter, Apache Camel
              </P>
              <H3 fontSize={14}>Infrastructure:</H3>
              <P indent={20}>
                GCP, AWS, Docker, Firebase, Virtualbox, Vagrant, Ansible
              </P>
              <H3 fontSize={14}>OS:</H3>
              <P indent={20}>Windows, Mac, Linux</P>
              <H3 fontSize={14}>Database:</H3>
              <P indent={20}>PostgresSQL, MySQL</P>
            </>
          }
        />
        <Message
          title="Site Map"
          body={
            <>
              <P>
                This site is my portfolio site. You can check about me in
                following links.
              </P>
              <H3 fontSize={14}>Channels:</H3>
              <LI>
                <Link to={channels.top.url}>
                  <More>#{channels.top.name}</More>
                </Link>{' '}
                ・・・Here. If you lost in this site, it's goot to back this
                channel.
              </LI>
              <LI>
                <Link to={channels.carrier.url}>
                  <More>#{channels.carrier.name}</More>
                </Link>{' '}
                ・・・You can see my work history.
              </LI>
              <LI>
                <Link to={channels.works.url}>
                  <More>#{channels.works.name}</More>
                </Link>{' '}
                ・・・Drop by this channel and take a look at my works.
              </LI>
              <LI>
                <Link to={channels.blog.url}>
                  <More>#{channels.blog.name}</More>
                </Link>{' '}
                ・・・You can read my blog's recently articles.
              </LI>
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

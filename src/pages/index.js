import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from 'components/templates/Layout'
import Image from 'components/atoms/Image'
import Avatar from 'components/atoms/Avatar'
import Message from 'components/molecules/Message'
import SEO from 'components/organisms/Seo'
import colors from 'constants/colors'

const Body = styled.div`
  margin-top: 30px;
`

const H3 = styled.h3`
  margin: 5px 0;
  font-size: ${({ fontSize }) =>
    fontSize ? [fontSize, 'px'].join('') : '16px'};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'bold')};
`
const P = styled.p`
  margin: 0px;
  margin-bottom: 2px;
  padding: 0;
  padding-left: ${({ indent }) => (indent ? [indent, 'px'].join('') : 0)};
`

const LI = styled.p`
  margin: 0px;
  margin-bottom: 10px;
  padding: 0;
  ::before {
    content: '■  ';
  }
`

const Bold = styled.span`
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <SEO title="top" />
    <Body>
      <Message
        title="Full Stack Engineer(React, React Native, Ruby on Rails)"
        body={
          <>
            <p>Name: jjoo</p>
            <LI>
              Programmer with skill of developping high quality and scalable web
              system. Be familiar With React and Ruby on Rails.{' '}
            </LI>
            <LI>
              Have Knowledge about React. Designed and Implemented my blog (with
              Gatsby), some React Native Applications and Web Applications.
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
              <a href="https://github.com/version-1" target="_blank">
                https://github.com/version-1
              </a>
            </P>
            <P>
              blog:{' '}
              <a href="https://ver-1-0.net" target="_blank">
                https://ver-1-0.net
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
               <Link to='/'>#top</Link> ・・・Here. If you lost in this site, it's goot to back this channel.
            </LI>
            <LI>
               <Link to='/channels/carrier'>#carrier</Link> ・・・You can see my work history.
            </LI>
            <LI>
               <Link to='/channels/works'>#works</Link> ・・・Drop by this channel and take a look at my works.
            </LI>
            <LI>
               <Link to='channels/blog'>#blog</Link> ・・・You can read my blog's recently articles.
            </LI>
          </>
        }
      />
    </Body>
  </Layout>
)

export default IndexPage

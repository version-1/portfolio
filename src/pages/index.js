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
`
const P = styled.p`
  margin: 0px;
  margin-bottom: 2px;
  padding: 0;
`

const Bold = styled.span`
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <SEO title="top" />
    <Body>
      <Message
        title="Technolody Summary"
        body={
          <>
            <H3>Language:</H3>
            <P>
              &nbsp;&nbsp;<Bold>JavaScript, Ruby</Bold>, GO, Kotlin, Java, PHP,
              SQL, HTML, CSS, Bash
            </P>
            <H3>FrameWork:</H3>
            <P>
              &nbsp;&nbsp;<Bold>React, React Native, Ruby on Rails</Bold>, Vue,
              Gin, Laravel, CakePHP, Spring ,Laravel, CodeIgniter, Apache Camel
            </P>
            <H3>Infrastructure:</H3>
            <P>
              &nbsp;&nbsp;GCP, AWS, Docker, Firebase, Virtualbox, Vagrant,
              Ansible
            </P>
            <H3>OS:</H3>
            <P>&nbsp;&nbsp;Windows, Mac, Linux</P>
            <H3>Database:</H3>
            <P>&nbsp;&nbsp;PostgresSQL, MySQL</P>
          </>
        }
      />
    </Body>
  </Layout>
)

export default IndexPage

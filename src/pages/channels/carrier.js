import React from 'react'
import { Link } from 'gatsby'

import Context from 'context'
import { Body, LI, H3, Bold } from 'components/styles'
import Layout from 'components/templates/Layout'
import Message from 'components/molecules/Message'
import Image from 'components/atoms/Image'
import SEO from 'components/organisms/Seo'

class Component extends React.PureComponent {
  componentDidMount() {
    const {
      state: { channels },
      mutations: { updatePage },
    } = this.props.context

    const path = this.props.props['*']
    if (path === '/') {
      updatePage(channels.top)
    } else {
      const [key] = path.split('/').slice(-1)
      updatePage(channels[key])
    }
  }

  render() {
    const { page, channels } = this.props.context.state

    return (
      <Layout>
        <SEO title={page.name} />
        <Body>
          <Message
            title="Web and Native App(React Native) automating document outputs for Real Estate Agent"
            body={
              <>
                <p>
                  Lead Programmer (Freelancer), <Bold>Oct 2018 to Current</Bold>
                </p>
                <p>
                  React, React Native, Vue, Ruby on Rails, Firebase Realtime
                  Database, MySQL
                </p>
                <H3>Accomplishment</H3>
                <LI>
                  Developed a native application (React Native) with Full
                  Scratch and release. Choose which languages and libraries.
                  Develop most of the code of server-side and front-end.
                </LI>
                <LI>
                  Developed a new chat function with Vue, Firebase Realtime
                  Database and Rails.
                </LI>
                <LI>
                  Migration webpack 2 to 4 on production environment. Halve the
                  time of build when member develop and deploy.{' '}
                </LI>
                <LI>
                  Dockernize the project’s environment to make members to use
                  same library’s version and to build environemnts easily
                </LI>
                <LI>
                  Manageing members as lead programmer. Break down tasks
                  requested by Product Manager and assign it into them and
                  Review their code.
                </LI>
              </>
            }
          />
          <Message
            title="Native app(React Native) for communities. "
            body={
              <>
                <p>
                  React Native Programmer (Freelancer),{' '}
                  <Bold>Mar 2018 to Dec 2018</Bold>
                </p>
                <p>React, React Native, Express, Firebase, MySQL</p>
                <H3>Accomplishment</H3>
                <LI>
                  Developed app with React Native and server-side with Express
                </LI>
                <LI>
                  Refactor to make the code be understandable and less
                  dependency.
                </LI>
              </>
            }
          />
          <Message
            title="Used mobile device EC site"
            body={
              <>
                <p>
                  React/ Ruby on Rails Programmer (Freelancer),{' '}
                  <Bold>Nov 2017 to Sep 2018</Bold>
                </p>
                <p>React, React Native, Express, Firebase, MySQL</p>
                <H3>Accomplishment</H3>
                <LI>
                  Developed app with React Native and server-side with Express
                </LI>
                <LI>
                  Refactor to make the code be understandable and less
                  dependency.
                </LI>
              </>
            }
          />
          <Message
            title="Music School’s web system for internals and customers"
            body={
              <>
                <p>
                  Programmer (fulltime), <Bold>Nov 2016 to Oct 2017</Bold>
                </p>
                <p>Ruby on Rails, JQuey, PostgresSQL</p>
                <H3>Accomplishment</H3>
                <LI>
                  Managed head-quarter members and remote
                  members(Mongol).Reviewed code. Assigned Tasks.
                </LI>
                <LI>
                  Operated and Supported two systems (for internals and
                  customers).
                </LI>
                <LI>
                  Develop one-stop deploy scripts(gradle and bash) to enable for developers to
                  develop easily and speed up cycle of test and deploy.
                </LI>
              </>
            }
          />
          <Message
            title="Web System related to Japan Central Bank"
            body={
              <>
                <p>
                  Programmer (fulltime), <Bold>Apr 2014 to Seq 2016</Bold>
                </p>
                <p>Bash, Java, Spring, MySQL, PostgresSQL, Jenkins, Apache Cample</p>
                <H3>Accomplishment</H3>
                <LI>Developed package system for routing with Java, Spring and Apache Camel.</LI>
                <LI>Developed automation tools for deploy</LI>
              </>
            }
          />
        </Body>
      </Layout>
    )
  }
}

export default props => (
  <Context.Consumer>
    {context => <Component props={props} context={context} />}
  </Context.Consumer>
)

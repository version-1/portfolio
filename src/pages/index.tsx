import React from "react";
import { Link } from "gatsby";

import { H3, P, LI, Bold, More } from "components/styles";
import Message from "components/domains/channel/message";
import Page from "components/shared/templates/page";
import constants from "constants/index";

const Component: React.FC = () => {
  const {
    channels: { top, experience, projects, "blog-en": blogEn },
    author,
  } = constants;

  return (
    <Page title="Top">
      <Message
        title={author}
        body={
          <>
            <p>
              <Bold>Hello! Welcome to my portfolio site.</Bold>Feel free to
              explore the links below to learn more about me and my work.
            </p>
            <H3 fontSize={14}>Channels:</H3>
            <LI>
              <Link to={top.url}>
                <More>#{top.name}</More>
              </Link>
              ・・・Lost on this site? It's a good idea to come back to this
              channel.
            </LI>
            <LI>
              <Link to={experience.url}>
                <More>#{experience.name}</More>
              </Link>
              ・・・Learn more about my experience here.
            </LI>
            <LI>
              <Link to={projects.url}>
                <More>#{projects.name}</More>
              </Link>
              ・・・Visit this section to explore my work.
            </LI>
            <LI>
              <Link to={blogEn.url}>
                <More>#{blogEn.name}</More>
              </Link>
              ・・・Recent articles from my blog.
            </LI>
          </>
        }
      />
      <Message
        title="Software Developer(Go, Ruby on Rails, TypeScript, React, React Native)"
        body={
          <>
            <p />
            <LI>
              Skilled programmer specializing in high-quality, scalable Web
              Systems
            </LI>
            <LI>
              Experienced in end-to-end modern web development, specializing in
              Go, Ruby, and React.
            </LI>
            <LI>
              Committed to continuous improvement in development practices
            </LI>
            <LI>Broad Perspective with Team Leadership Experience</LI>
            <table>
              <tr>
                <th style={{ textAlign: "left" }}>Github: </th>
                <td>
                  <a
                    href="https://github.com/version-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <More>https://github.com/version-1</More>
                  </a>
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "left" }}>Blog: </th>
                <td>
                  <a
                    href="https://ver-1-0.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <More>https://ver-1-0.net</More>
                  </a>
                </td>
              </tr>
            </table>
          </>
        }
      />
      <Message
        title="Skills"
        body={
          <>
            <H3 fontSize={14}>Language:</H3>
            <P indent={20}>
              <Bold>Go, Ruby, JavaScript, </Bold>TypeScript, SQL, HTML, CSS, Bash
            </P>
            <H3 fontSize={14}>FrameWork:</H3>
            <P indent={20}>
              <Bold>React, Next.js, Ruby on Rails, Expo</Bold>
            </P>
            <H3 fontSize={14}>Infrastructure:</H3>
            <P indent={20}>GCP, AWS, Docker, Kubernetes, Circle CI, Firebase</P>
            <H3 fontSize={14}>Database:</H3>
            <P indent={20}>PostgresSQL, MySQL</P>
          </>
        }
      />
    </Page>
  );
};

export default Component;

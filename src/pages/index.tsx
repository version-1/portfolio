import React from "react";
import { Link } from "gatsby";

import { H3, P, LI, Bold, More } from "components/styles";
import Message from "components/domains/channel/message";
import Page from "components/shared/templates/page";
import constants from "constants/index";

const Component: React.FC = () => {
  const {
    channels: {
      top,
      experience,
      projects,
      "blog-en": blogEn,
    },
    author,
  } = constants;

  return (
    <Page title="Top">
      <Message
        title={author}
        body={
          <>
            <p>
              <Bold>Hello! Welcome to my portfolio site.</Bold> You can check
              about me in following links.
            </p>
            <H3 fontSize={14}>Channels:</H3>
            <LI>
              <Link to={top.url}>
                <More>#{top.name}</More>
              </Link>
              ・・・Here. If you lost in this site, it's goot to back this
              channel.
            </LI>
            <LI>
              <Link to={experience.url}>
                <More>#{experience.name}</More>
              </Link>
              ・・・Work history.
            </LI>
            <LI>
              <Link to={projects.url}>
                <More>#{projects.name}</More>
              </Link>
              ・・・Drop by this channel and take a look at my works.
            </LI>
            <LI>
              <Link to={blogEn.url}>
                <More>#{blogEn.name}</More>
              </Link>
              ・・・My own blog's recently articles.
            </LI>
          </>
        }
      />
      <Message
        title="Full Stack Engineer(React, React Native, Ruby on Rails)"
        body={
          <>
            <p />
            <LI>
              Programmer with skill of developping high quality and scalable web
              system. Be familiar With React and Ruby on Rails.
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
              small teams and review their design and code.
            </LI>
            <P>
              github:{" "}
              <a
                href="https://github.com/version-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <More>https://github.com/version-1</More>
              </a>
            </P>
            <P>
              blog:{" "}
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
        title="Skills"
        body={
          <>
            <H3 fontSize={14}>Language:</H3>
            <P indent={20}>
              <Bold>Go, Ruby, JavaScript</Bold>TypeScript, SQL, HTML,
              CSS, Bash
            </P>
            <H3 fontSize={14}>FrameWork:</H3>
            <P indent={20}>
              <Bold>React, Next.js, Ruby on Rails, Expo</Bold>
            </P>
            <H3 fontSize={14}>Infrastructure:</H3>
            <P indent={20}>
              GCP, AWS, Docker, Kubernetes, Circle CI, Firebase
            </P>
            <H3 fontSize={14}>Database:</H3>
            <P indent={20}>PostgresSQL, MySQL</P>
          </>
        }
      />
    </Page>
  );
};

export default Component;

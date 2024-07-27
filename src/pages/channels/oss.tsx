import React from "react";
import Message from "components/domains/channel/message";
import Page from "components/shared/templates/page";
import { Thumbnail } from "components/styles/index";
import vuexThumbnail from "assets/vuex-contribution.png";

type FeatureNode = {
  title: React.ReactNode;
  children?: FeatureNode[];
};

function Tree({ node, depth }: { node: FeatureNode; depth?: number }) {
  const _depth = depth || 0;
  const childrenStyle = { marginLeft: `16px` };

  return (
    <div>
      <p>{node.title}</p>
      {node.children ? (
        <ul style={childrenStyle}>
          {node.children?.map((child) => (
            <li style={{ listStyle: "square", ...childrenStyle }}>
              <Tree node={child} depth={_depth + 1} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const featureTree = [
  {
    title: "Database",
    children: [
      {
        title: "Simple ORM",
      },
      {
        title: "Validation",
      },
      {
        title: "Query Logging",
      },
      {
        title: (
          <p>
            Migration inspired ({" "}
            <a href="https://github.com/version-1/goooder">
              https://github.com/version-1/goooder
            </a>{" "}
            )
          </p>
        ),
      },
      {
        title: (
          <p>
            Seeding inspired ({" "}
            <a href="https://github.com/version-1/goooma">
              https://github.com/version-1/goooma
            </a>{" "}
            )
          </p>
        ),
      },
    ],
  },
  {
    title: "Controller",
    children: [
      {
        title: "Basic features for controller",
      },
      {
        title: "Serialization compatible with JSON-API",
      },
      {
        title: "Request Pipeline",
      },
      {
        title: "Error Handling on request-scope",
      },
    ],
  },
  {
    title: "Middleware",
    children: [
      {
        title: "Auth",
      },
      {
        title: "Request Logging",
      },
    ],
  },
  {
    title: "Testing",
    children: [
      {
        title: "DB Cleaner",
      },
      {
        title: (
          <p>
            Flexible Matcher inspired{" "}
            ( <a href="https://github.com/version-1/go-matcha">https://github.com/version-1/go-matcha</a> )
          </p>
        ),
      },
      {
        title: "Utilities for testing",
      },
    ],
  },
  {
    title: "Misc",
    children: [
      {
        title: "Config",
      },
      {
        title: "HTTP Client",
      },
    ],
  },
];

const Component: React.FC = () => {
  return (
    <Page title="OSS">
      <Message
        title="[WIP]Gooo - golang full-stack framework for web backend development"
        body={
          <>
            Full-stack framework for web backend development built with Go. This
            will have the following features.
            {featureTree.map((node) => (
              <Tree node={node} />
            ))}
            <p>
              Link:{" "}
              <a href="https://github.com/version-1/gooo">
                https://github.com/version-1/gooo
              </a>
            </p>
          </>
        }
      />
      <Message
        title="Vuex Contribution"
        body={
          <>
            Tiny contrubition to fix typo of Japanese Documents.
            <p>
              <Thumbnail src={vuexThumbnail} alt="papyrus thumbanail" />
            </p>
            <p>
              Link:{" "}
              <a href="https://github.com/vuejs/vuex/pull/1825">
                https://github.com/vuejs/vuex/pull/1825
              </a>
            </p>
          </>
        }
      />
      <Message
        title="Cnstnts"
        body={
          <>
            npm package. Easily define "Plain Object-base" enum helper. It is
            good to use it for Redux or Hooks API useReducer's actions.
            <p>
              Link:{" "}
              <a href="https://github.com/version-1/cnstnts">
                https://github.com/version-1/cnstnts
              </a>
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
              Link:{" "}
              <a href="https://github.com/version-1/react-native-various-form">
                https://github.com/version-1/react-native-various-form
              </a>
            </p>
          </>
        }
      />
    </Page>
  );
};

export default Component;

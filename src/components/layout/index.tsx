import React, { ReactNode } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import GlobalStyle from "components/styles/global";
import Icon from "components/shared/atoms/icon";
import Loader from "components/shared/templates/loading";

import Header from "components/layout/header";
import MobileHeader from "components/layout/mobile/header";
import Footer from "components/layout/footer";
import MobileFooter from "components/layout/mobile/footer";
import Sidebar from "components/layout/sidebar";
import useChannel from "context/channel";
import useApp from "context/app";
import colors from "constants/colors";
import { media } from "components/styles";

const Container = styled.div`
  display: flex;
`;

const Body = styled.div`
  overflow: scroll;
  height: calc(100vh - 180px);
  ${media.mobile`height: calc(calc(var(--vh, 1vh) * 100) - 160px);`};
`;

const Menu = styled.div`
  padding: 16px;
  cursor: pointer;
  border-bottom: 1px solid ${colors.border};
`;

interface ContentProps {
  children: ReactNode;
  channels: any;
  dm: any;
}

const Content: React.FC<ContentProps> = ({ children, channels, dm }) => {
  return (
    <>
      <Sidebar channels={channels} dm={dm} />
      <main>
        <Header />
        <Body className="content-body">{children}</Body>
        <Footer />
      </main>
    </>
  );
};

const MobileContent: React.FC<ContentProps> = ({ children, channels, dm }) => {
  const {
    state: { layout },
    toggleSidebar,
  } = useApp();

  return (
    <>
      <Sidebar channels={channels} dm={dm} />
      {!layout.mobile.showSidebar ? (
        <main>
          <MobileHeader />
          <Body className="content-body">{children}</Body>
          <MobileFooter />
        </main>
      ) : (
        <main>
          <Menu onClick={toggleSidebar}>
            <Icon name="menu" />
          </Menu>
        </main>
      )}
    </>
  );
};

interface Props {
  children: ReactNode;
  state: any;
}

const Layout: React.FC<Props> = ({ state, children }) => {
  const {
    state: { ready, mobile },
  } = useApp();

  if (!ready) {
    return <Loader show />;
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => {
        const channels = Object.values(state.channels);
        const dm = Object.values(state.dm);
        return (
          <>
            <GlobalStyle />
            <Container>
              {mobile ? (
                <MobileContent
                  {...state}
                  children={children}
                  channels={channels}
                  dm={dm}
                />
              ) : (
                <Content
                  {...state}
                  children={children}
                  channels={channels}
                  dm={dm}
                />
              )}
            </Container>
          </>
        );
      }}
    />
  );
};

export default Layout;

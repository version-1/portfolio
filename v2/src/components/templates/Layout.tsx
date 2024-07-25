import React, { ReactNode } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "components/styles/GlobalStyle";
import Icon from "components/atoms/icon";

import Header from "components/organisms/Header";
import MobileHeader from "components/organisms/MobileHeader";
import Footer from "components/organisms/Footer";
import MobileFooter from "components/organisms/MobileFooter";
import Sidebar from "components/organisms/Sidebar";
import usePage from "hooks/usePage";
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
  pathname: string;
  children: ReactNode;
  page: any;
  mobile: any;
  postMessage?: any;
  toggleSidebar?: any;
  channels: any;
  dm: any;
}

const Content: React.FC<ContentProps> = ({
  page,
  pathname,
  children,
  postMessage,
  channels,
  dm,
}) => {
  return (
    <>
      <Sidebar pathname={pathname} mobile={false} channels={channels} dm={dm} />
      <main>
        <Header page={page} />
        <Body className="content-body">{children}</Body>
        <Footer page={page} postMessage={postMessage} />
      </main>
    </>
  );
};

const MobileContent: React.FC<ContentProps> = ({
  page,
  mobile,
  pathname,
  children,
  postMessage,
  toggleSidebar,
  channels,
  dm,
}) => {
  return (
    <>
      <Sidebar
        mobile={mobile}
        pathname={pathname}
        channels={channels}
        dm={dm}
        toggleSidebar={toggleSidebar}
      />
      {!mobile.showSidebar ? (
        <main>
          <MobileHeader page={page} toggleSidebar={toggleSidebar} />
          <Body className="content-body">{children}</Body>
          <MobileFooter page={page} postMessage={postMessage} />
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
  hideModal: () => void;
  postMessage: (message: string) => void;
  toggleSidebar: () => void;
}

const Layout: React.FC<Props> = ({
  state,
  children,
  postMessage,
  toggleSidebar,
}) => {
  const { mobile, pathname } = usePage();
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
                  pathname={pathname}
                  children={children}
                  postMessage={postMessage}
                  toggleSidebar={toggleSidebar}
                  channels={channels}
                  dm={dm}
                />
              ) : (
                <Content
                  {...state}
                  pathname={pathname}
                  children={children}
                  postMessage={postMessage}
                  toggleSidebar={toggleSidebar}
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

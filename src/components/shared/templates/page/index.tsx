import React, { ReactNode } from "react";
import { Body, P } from "components/styles";
import Layout from "components/layout";
import Message from "components/domains/channel/message";
import SEO from "components/layout/seo";
import useApp, { Provider as AppProvider } from "context/app";
import useChannel, { Provider as ChannelProvider } from "context/channel";
import Modal from "components/shared/templates/modal";

import you from "assets/you.png";

const parseContent = (content: string) => {
  return (
    <>{content.split("\n").map((line) => (line ? <P>{line}</P> : <p />))}</>
  );
};

interface Props {
  children?: ReactNode;
  title: string;
}

function Messages() {
  const {
    selector: { messages },
  } = useChannel();

  return (
    <>
      {messages?.map((message: any, index: number) => (
        <Message
          key={`channel-messages-${index}`}
          icon={you}
          title={message.sender}
          body={parseContent(message.content)}
        />
      ))}
    </>
  );
}

const Page: React.FC<Props> = ({ children, title }) => {
  const {
    config: { channels, dm },
  } = useApp();

  return (
    <AppProvider>
      <ChannelProvider>
        <Layout state={{ dm, channels }}>
          <SEO title={title} />
          <Body>
            <>{children}</>
            <Messages />
          </Body>
        </Layout>
        <Modal />
      </ChannelProvider>
    </AppProvider>
  );
};

export default Page;

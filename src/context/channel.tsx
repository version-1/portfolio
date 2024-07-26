import React, { createContext, useContext, useState, useMemo } from "react";
import { useLocation } from "@reach/router";
import { scrollBottom } from "utils/index";
import constants, { Channel } from "constants/index";

type PostMessage = ({
  sender,
  content,
}: {
  sender: string;
  content: string;
}) => void;

type ChannelContext = {
  state: {
    pathname: string;
    current: Channel | undefined;
  };
  selector: {
    messages: Message[];
  };
  postMessage: PostMessage;
};

const context = createContext<ChannelContext>({
  state: {
    pathname: "",
    current: undefined as Channel | undefined,
  },
  selector: {
    messages: [] as Message[],
  },
  postMessage: () => ({}) as PostMessage,
});

type Props = {
  children: React.ReactNode;
};

type Message = {
  sender: string;
  content: string;
};

export const Provider = ({ children }: Props) => {
  const [_messages, setMessages] = useState<{
    [key: Channel["key"]]: Message[];
  }>({});
  const location = useLocation();

  const current = useMemo(() => {
    const { channels, dm } = constants;
    const page = [...Object.values(channels), ...Object.values(dm)].find((it) =>
      it.url === "/"
        ? location.pathname == it.url
        : location.pathname.startsWith(it.url),
    );
    return page;
  }, [location.pathname]);

  const postMessage = (message: Message) => {
    const { key } = current || {};
    const prevMessages = _messages[key as Channel["key"]] || [];
    const newMessages = [...prevMessages, message];
    // if (_page.notify) {
    //   slack.notify(message)
    // }
    setMessages({ ..._messages, [key as Channel["key"]]: newMessages });
    setTimeout(() => scrollBottom(), 100);
  };

  const messages = _messages[current?.key as Channel["key"]] || [];

  const value = {
    state: {
      pathname: location.pathname,
      current,
    },
    selector: {
      messages,
    },
    postMessage,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default function useChannel() {
  return useContext(context);
}

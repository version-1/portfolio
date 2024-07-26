import React, { useEffect, useState } from "react";
import data from "constants/index";
import { breakpoints } from "components/styles";

const { modal } = data;

const initialState = {
  articles: {
    queue: [],
    list: [],
  },
  modal,
  mobile: false,
  mobileLayout: {
    showSidebar: false,
    height: 0,
  },
  ready: false,
};

const Context = React.createContext({
  config: {
    channels: data.channels,
    dm: data.dm,
  },
  state: {
    ready: false,
    modal: initialState.modal,
    mobile: false,
    layout: {
      mobile: initialState.mobileLayout,
    },
    articles: initialState.articles,
  },
  showModal: () => () => {},
  hideModal: () => {},
  toggleSidebar: () => {},
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const value = prepareApp();

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const prepareApp = () => {
  const [mobile, setMobile] = useState(false);
  const [_mobileLayout, setMobileLayout] = useState<
    typeof initialState.mobileLayout
  >(initialState.mobileLayout);
  const [_modal, setModal] = useState<typeof initialState.modal>();
  const [_ready, setReady] = useState<boolean>(initialState.ready);
  const [articles, setArticles] = useState<typeof initialState.articles>();

  useEffect(() => {
    const mobile =
      typeof window !== "undefined"
        ? window.parent.screen.width <= breakpoints.mobile
        : false;
    setMobile(mobile);
    if (window && mobile) {
      const height = window.innerHeight || 0;
      const vh = height * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setMobileLayout({ ..._mobileLayout, height });
    }

    setReady(true);
  }, []);

  const showModal = ({
    title,
    content,
  }: {
    title: string;
    content: React.ReactNode;
  }) => {
    const newState = { show: true, title, content };
    setModal(newState);

    return () => setModal(modal);
  };

  const hideModal = () => {
    setModal(data.modal);
  };

  const toggleSidebar = () => {
    setMobileLayout({
      ..._mobileLayout,
      showSidebar: !_mobileLayout.showSidebar,
    });
  };

  return {
    state: {
      ready: _ready,
      modal: _modal,
      layout: {
        mobile: _mobileLayout,
      },
      articles,
    },
    showModal,
    hideModal,
    toggleSidebar,
  };
};

export default function useApp() {
  return React.useContext(Context);
}

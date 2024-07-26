import React, { useEffect, useState, ReactNode } from "react";
import styled from "@emotion/styled";
import Icon from "components/shared/atoms/icon";

interface StyleProps {
  show?: boolean;
}

const Container = styled.div<StyleProps>`
  z-index: 1000;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: 100%;
  transition: transform ease-in-out 0.3s;
  transform: ${({ show }) => (show ? "scale(1)" : "scale(0)")};
  transform: ${({ show }) => (show ? "tranlateY(0)" : "translateY(100%)")};
  overflow: scroll;
`;

const Header = styled.div<StyleProps>`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  display: ${({ show }) => (show ? "flex" : "none")};
  height: 60px;
  align-items: center;
`;
const Title = styled.h2`
  margin: 0px;
  text-align: center;
  width: 100%;
`;

const Close = styled.div`
  position: fixed;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

let show = (_params: {
  title?: string;
  header?: ReactNode;
  content?: ReactNode;
}) => {};
let hide = () => {};

interface ClassMethods {
  show: (_params: {
    title?: string;
    header?: ReactNode;
    content?: ReactNode;
  }) => void;
  hide: () => void;
}

type Props = {
  show?: boolean;
  title?: ReactNode;
};

const Modal: React.FC<Props> & ClassMethods = ({
  show,
  title: defaultTitle,
}) => {
  const [visible, setVisible] = useState(false);
  const [header, setHeader] = useState<ReactNode | undefined>();
  const [content, setContent] = useState<ReactNode | undefined>();
  const [title, setTitle] = useState<ReactNode | undefined>(defaultTitle);
  useEffect(() => {
    Modal.show = ({ title, header, content }) => {
      setTitle(title);
      setHeader(header);
      setContent(content);
      setVisible(true);
    };
    Modal.hide = () => setVisible(false);
  }, []);

  return (
    <Container show={visible}>
      {header ? (
        header
      ) : (
        <Header show={visible}>
          <Title>{title}</Title>
          <Close>
            <Icon name="close" size={30} onClick={Modal.hide} />
          </Close>
        </Header>
      )}
      <Content>{content}</Content>
    </Container>
  );
};

Modal.show = show;
Modal.hide = hide;

export default Modal;

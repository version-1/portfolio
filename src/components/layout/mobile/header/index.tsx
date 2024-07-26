import React from "react";
import styled from "@emotion/styled";
import moment from "moment";
import constants from "constants/index";
import Separator from "components/shared/atoms/separator";
import Icon from "components/shared/atoms/icon";
import { media } from "components/styles";
import useApp from "context/app";
import useChannel from "context/channel";

const Container = styled.header`
  height: ${constants.headerHeight};
  width: 100%;
  ${media.mobile`height: auto;`}
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 16px;
  &::before {
    content: "#";
  }
  &:hover {
    opacity: 0.6;
  }
`;

const Menu = styled.div`
  cursor: pointer;
`;

const Left = styled.div`
  margin-right: 16px;
`;

// ex) Friday, May 24
const date = moment()
  .format("LLLL")
  .split(" ")
  .slice(0, 3)
  .join(" ")
  .slice(0, -1);

const MobileHeader: React.FC = () => {
  const { toggleSidebar } = useApp();
  const {
    state: { current },
  } = useChannel();

  return (
    <Container>
      <Content>
        <Left>
          <Menu onClick={toggleSidebar}>
            <Icon name="menu" size={24} />
          </Menu>
        </Left>
        <Title>{current?.name}</Title>
      </Content>
      <Separator text={date} />
    </Container>
  );
};

export default MobileHeader;

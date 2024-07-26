import React from "react";
import styled from "@emotion/styled";
import Icon from "components/shared/atoms/icon";
import colors from "constants/colors";
import LogoBlog from "components/shared/atoms/icon/blog";

const BlogIcon = styled.div`
  height: 60;
  width: 60;
  margin: 10px;
  padding: 10px;
  background-color: ${colors.sidebarLeftIcon};
  border-radius: 6px;
  padding: 10;
  color: "#ffffff";
`;
const Item = styled.li`
  text-align: center;
`;
const Container = styled.div``;

const iconColor = '#2c2254';

const snsLinks = [
  {
    text: "blog",
    to: "https://ver-1-0.net",
    icon: (
      <BlogIcon>
        <LogoBlog />
      </BlogIcon>
    ),
  },
  {
    text: "github",
    to: "https://github.com/version-1",
    icon: (
      <BlogIcon>
        <Icon name="github" color={iconColor} />
      </BlogIcon>
    ),
  },
  {
    text: "linkedin",
    to: "https://www.linkedin.com/in/jiro-onodera-1b3766145",
    icon: (
      <BlogIcon>
        <Icon name="linkedin" color={iconColor} />
      </BlogIcon>
    ),
  },
  {
    text: "twitter",
    to: "https://twitter.com/version1_2017",
    icon: (
      <BlogIcon>
        <Icon name="twitter" color={iconColor} />
      </BlogIcon>
    ),
  },
];

const SNSLinks: React.FC = () => {
  return (
    <Container>
      <ul>
        {snsLinks.map(({ to, icon }) => (
          <Item key={to}>
            <a href={to} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </Item>
        ))}
      </ul>
    </Container>
  );
};
export default SNSLinks;

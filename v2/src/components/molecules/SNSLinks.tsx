import React from "react";
import styled from "styled-components";
import Icon from "components/atoms/icon";
import colors from "constants/colors";
import LogoBlog from "components/atoms/icon/blog";

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
        <Icon name="github" color="#ffffff" />
      </BlogIcon>
    ),
  },
  {
    text: "linkedin",
    to: "https://www.linkedin.com/in/jiro-onodera-1b3766145",
    icon: (
      <BlogIcon>
        <Icon name="linkedin" color="#ffffff" />
      </BlogIcon>
    ),
  },
  {
    text: "twitter",
    to: "https://twitter.com/version1_2017",
    icon: (
      <BlogIcon>
        <Icon name="twitter" color="#ffffff" />
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

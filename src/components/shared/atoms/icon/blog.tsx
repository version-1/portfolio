import React from "react"
import styled from "@emotion/styled"
import constants from "constants/index"

const Container = styled.div`
  height: 22px;
  width: 22px;
  font-weight: bold;
  color: ${constants.deepKey};;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`


const BlogIcon: React.FC = () => <Container>B</Container>

export default BlogIcon

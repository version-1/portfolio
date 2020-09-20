import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 22px;
  width: 22px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`


const BlogIcon: React.FC = () => <Container>B</Container>

export default BlogIcon

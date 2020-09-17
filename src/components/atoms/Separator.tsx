import React from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'

const Container = styled.div`
  height: 0px;
  text-align: center;
  border-bottom: 1px solid ${colors.border};
`
const Text = styled.span`
  position: relative;
  top: -8px;
  font-size: 14px;
  color: ${colors.darkText};
  background-color: white;
  display: inline-block;
  padding: 0 16px;
`

interface Props {
  text: string
}

const Separator = ({ text }: Props) => (
  <Container>{text && <Text>{String(text)}</Text>}</Container>
)

export default Separator

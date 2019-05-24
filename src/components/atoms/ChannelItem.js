import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import colors from 'constants/colors'

const Channel = styled.h2`
  color: ${colors.weakText};
  font-size: 16px;
  font-weight: normal;
  &::before {
    content: '#  ';
  }
`
const ChannelItem = ({ to, text, onClick }) => (
  <Link to={to}>
    <Channel onClick={onClick}>{text}</Channel>
  </Link>
)

export default ChannelItem

import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import colors from 'constants/colors'

const Channel = styled.h2`
  color: ${colors.weakText};
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  padding: 6px 16px;
  &::before {
    content: '#  ';
  }
  :hover {
    background-color: #2e0b2f;
  }
`
const ChannelItem = ({ url, name, onClick }) => (
  <Link to={url}>
    <Channel>{name}</Channel>
  </Link>
)

export default ChannelItem

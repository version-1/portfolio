import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import colors from 'constants/colors'

const Channel = styled.h2`
  color: ${({ selected }) => selected ? colors.strongText : colors.weakText};
  background-color: ${({ selected }) => selected ? colors.accent : '' };
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  padding: 6px 16px;
  &::before {
    content: '#  ';
  }
  :hover {
    background-color: ${({ selected }) => selected ? '' : colors.keyHover};
  }
`
const ChannelItem = ({ url, name, selected }) => (
  <Link to={url}>
    <Channel selected={selected}>{name}</Channel>
  </Link>
)

export default ChannelItem

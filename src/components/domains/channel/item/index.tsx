import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import colors from 'constants/colors'

interface ChannelParam {
  selected: boolean
}

const Channel = styled.h2`
  color: ${({ selected }: ChannelParam) =>
    selected ? colors.strongText : colors.channelText};
  background-color: ${({ selected }: ChannelParam) =>
    selected ? colors.accent : ''};
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  padding: 6px 16px;
  &::before {
    content: '#  ';
  }

  :hover {
    background-color: ${({ selected }: ChannelParam) =>
      selected ? '' : colors.keyHover};
    color: ${colors.pureWhite};
  }
`

interface Props {
  url: string
  name: string
  selected: boolean
}

const ChannelItem: React.FC<Props> = ({ url, name, selected }) => (
  <Link to={url}>
    <Channel selected={selected}>{name}</Channel>
  </Link>
)

export default ChannelItem

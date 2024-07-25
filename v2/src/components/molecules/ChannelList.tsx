import React from 'react'
import styled from 'styled-components'
import ChannelItem from 'components/atoms/channelItem'

const Container = styled.div``

interface Props {
  pathname: string
  list: any[]
  onClick: () => void
}

const ChannelList: React.FC<Props> = ({ pathname, list, onClick }) => {
  return (
    <Container>
      <ul>
        {list.map(({ url, name }) => {
          const selected = pathname === url
          return (
            <li key={url} onClick={onClick}>
              <ChannelItem url={url} name={name} selected={selected}/>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ChannelList

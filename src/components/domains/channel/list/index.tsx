import React from 'react'
import styled from '@emotion/styled'
import ChannelItem from '../item'

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
          const selected = pathname === url || pathname === url + "/"
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

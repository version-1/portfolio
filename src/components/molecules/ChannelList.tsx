import React from 'react'
import styled from 'styled-components'
import ChannelItem from 'components/atoms/ChannelItem'

const Container = styled.div``

interface Props {
  page: any
  list: any[]
  onClick: () => void
}

const ChannelList: React.FC<Props> = ({ page, list, onClick }) => {
  return (
    <Container>
      <ul>
        {list.map(({ url, name }) => {
          const selected = page.url === url
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

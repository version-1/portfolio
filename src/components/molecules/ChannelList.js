import React from 'react'
import styled from 'styled-components'
import ChannelItem from 'components/atoms/ChannelItem'

const Container = styled.div``

const ChannelList = ({ list }) => {
  return (
    <Container>
      <ul>
        {list.map(({ url, name }) => {
          return (
            <li key={url}>
              <ChannelItem url={url} name={name} />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ChannelList

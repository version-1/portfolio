import React from 'react'
import styled from 'styled-components'
import ChannelItem from 'components/atoms/ChannelItem'

const Item = styled.li`
  text-align: center;
`
const Container = styled.div``

const ChannelList = ({ list, updatePage }) => {
  return (
    <Container>
      <ul>
        {list.map(({ to, text }) => {
          const onClick = () => updatePage({ title: text, url: to })
          return (
            <li key={to}>
              <ChannelItem to={to} text={text} onClick={onClick} />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ChannelList

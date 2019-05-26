import React from 'react'
import { More as MoreStyle } from 'components/styles'

const More = ({ href, text, ...rest }) => {
  return (
    <a {...rest} href={href}>
      <MoreStyle>{text ? text : 'more...'}</MoreStyle>
    </a>
  )
}

export default More

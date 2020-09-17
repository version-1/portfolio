import React from 'react'
import { More as MoreStyle } from 'components/styles'

interface Props {
  href: string
  text: string
}

const More: React.FC<Props> = ({ href, text, ...rest }) => {
  return (
    <a {...rest} href={href}>
      <MoreStyle>{text ? text : 'more...'}</MoreStyle>
    </a>
  )
}

export default More

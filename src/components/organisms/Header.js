import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import constants from 'constants'
import colors from 'constants/colors'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoReddit from 'react-ionicons/lib/LogoReddit'
import {
  TwitterShareButton,
  RedditShareButton,
  FacebookShareButton,
} from 'react-share'
import MdCopy from 'react-ionicons/lib/MdCopy'

import Separator from 'components/atoms/Separator'
import Tooltip from 'components/atoms/Tooltip'
import { media } from 'components/styles'

const Container = styled.header`
  height: ${constants.headerHeight};
  width: 100%;
`
const Content = styled.div`
  padding: 16px;
  ${media.mobile `padding: 8px;`}
`

const Title = styled.h1`
  font-size: 20px;
  ${media.mobile `
    text-align: center;
    padding: 8px;
  `}
  &::before {
    content: '#';
  }
`

const Description = styled.p`
  color: ${colors.grayText};
  font-size: 14px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  ${media.mobile `display: none;`}
`

const ButtonGroup = styled.div`
  color: ${colors.grayText};
  margin: 10px 0;
  display: flex;
  align-items: center;
`

const VSeparator = styled.div`
  margin: 0 4px;
`
// ex) Friday, May 24
const date = moment()
  .format('LLLL')
  .split(' ')
  .slice(0, 3)
  .join(' ')
  .slice(0, -1)

const copy = url => {
  navigator.clipboard.writeText(url).then(
    function() {
      console.log('Async: Copying to clipboard was successful!')
    },
    function(err) {
      console.error('Async: Could not copy text: ', err)
    }
  )
}

const Header = ({ page }) => {
  const url = constants.origin + page.url
  return (
    <Container>
      <Content>
        <Title>{page.name}</Title>
        <Footer>
          <input id="copy-text" type="hidden" value={url} />
          <ButtonGroup>
            <Tooltip text="copy URL">
              <MdCopy
                onClick={() => copy(url)}
                fontSize="16px"
                color={colors.grayText}
              />
            </Tooltip>
            <VSeparator>|</VSeparator>
            <Tooltip text="twitter">
              <TwitterShareButton url={url}>
                <LogoTwitter fontSize="16px" color={colors.grayText} />
              </TwitterShareButton>
            </Tooltip>
            <VSeparator>|</VSeparator>
            <Tooltip text="reddit">
              <RedditShareButton url={url}>
                <LogoReddit fontSize="16px" color={colors.grayText} />
              </RedditShareButton>
            </Tooltip>
            <VSeparator>|</VSeparator>
            <Tooltip text='facebook'>
              <FacebookShareButton url={url}>
                <LogoFacebook fontSize="16px" color={colors.grayText} />
              </FacebookShareButton>
            </Tooltip>
            <VSeparator>|</VSeparator>
          </ButtonGroup>
          <Description>{page.description}</Description>
        </Footer>
      </Content>
      <Separator text={date} />
    </Container>
  )
}

export default Header

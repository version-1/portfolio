import React from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import constants from 'constants/index'
import colors from 'constants/colors'
import Icon from 'components/shared/atoms/icon'
import {
  TwitterShareButton,
  RedditShareButton,
  FacebookShareButton,
} from 'react-share'

import Separator from 'components/shared/atoms/separator'
import Tooltip from 'components/shared/atoms/tooltip'

const Container = styled.header`
  height: ${constants.headerHeight};
  width: 100%;
`
const Content = styled.div`
  padding: 16px;
`

const Title = styled.h1`
  font-size: 20px;
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

const copy = (url: string) => {
  navigator.clipboard.writeText(url).then(
    function () {
      console.log('Async: Copying to clipboard was successful!')
    },
    function (err) {
      console.error('Async: Could not copy text: ', err)
    }
  )
}

interface Props {
  page: any
}

const Header: React.FC<Props> = ({ page }) => {
  const url = constants.origin + page.url
  return (
    <Container>
      <Content>
        <Title>{page.name}</Title>
        <Footer>
          <input id="copy-text" type="hidden" value={url} />
          <ButtonGroup>
            <Tooltip text="copy URL">
              <Icon
                name="copy"
                onClick={() => copy(url)}
                size={16}
                color={colors.grayText}
              />
            </Tooltip>
            <VSeparator>|</VSeparator>
            <Tooltip text="twitter">
              <TwitterShareButton url={url}>
                <Icon name="twitter" size={16} color={colors.grayText} />
              </TwitterShareButton>
            </Tooltip>
            <VSeparator>|</VSeparator>
            <Tooltip text="reddit">
              <RedditShareButton url={url}>
                <Icon name="reddit" size={16} color={colors.grayText} />
              </RedditShareButton>
            </Tooltip>
            <VSeparator>|</VSeparator>
            <Tooltip text="facebook">
              <FacebookShareButton url={url}>
                <Icon name="facebook" size={16} color={colors.grayText} />
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

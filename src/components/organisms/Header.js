import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import constants from 'constants'
import colors from 'constants/colors'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoReddit from 'react-ionicons/lib/LogoReddit'
import MdCopy from 'react-ionicons/lib/MdCopy'

import Separator from 'components/atoms/Separator'

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

const icons = [
  <MdCopy fontSize="16px" color={colors.grayText} />,
  <LogoTwitter fontSize="16px" color={colors.grayText} />,
  <LogoReddit fontSize="16px" color={colors.grayText} />,
  <LogoFacebook fontSize="16px" color={colors.grayText} />,
]

// ex) Friday, May 24
const date = moment()
  .format('LLLL')
  .split(' ')
  .slice(0, 3)
  .join(' ')
  .slice(0, -1)

const Header = ({ page }) => (
  <Container>
    <Content>
      <Title>{page.name}</Title>
      <Footer>
        <ButtonGroup>
          {icons.map(icon => (
            <>
              {icon}
              <VSeparator>|</VSeparator>
            </>
          ))}
        </ButtonGroup>
        <Description>{page.description}</Description>
      </Footer>
    </Content>
    <Separator text={date} />
  </Container>
)

export default Header

import React from 'react'
import styled from 'styled-components'
import constants from 'constants'
import colors from 'constants/colors'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoReddit from 'react-ionicons/lib/LogoReddit'
import MdCopy from 'react-ionicons/lib/MdCopy'

const Container = styled.header`
  height: ${constants.headerHeight};
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid lightgray;
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

const Separator = styled.div`
  margin: 0 4px;
`

const icons = [
  <MdCopy fontSize="16px" color={colors.grayText} />,
  <LogoTwitter fontSize="16px" color={colors.grayText} />,
  <LogoReddit fontSize="16px" color={colors.grayText} />,
  <LogoFacebook fontSize="16px" color={colors.grayText} />,
]
const Header = ({ page }) => (
  <Container>
    <Title>{page.title}</Title>
    <Footer>
      <ButtonGroup>
        {icons.map(icon => (
          <>
            {icon}
            <Separator>|</Separator>
          </>
        ))}
      </ButtonGroup>
      <Description>{page.description}</Description>
    </Footer>
  </Container>
)

export default Header

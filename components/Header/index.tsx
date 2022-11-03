import { AppBar } from '@mui/material'

import logoPic from '../../assets/logo.png'

import { HeaderContainer, LogoWrapper, StyledImage, StyledSpan } from './styled'

export const Header = () => {
  return (
    <AppBar
      sx={{ bgcolor: '#9c27b0', height: '40px', margin: '25.5px 0' }}
      position="static"
    >
      <HeaderContainer>
        <LogoWrapper href="/">
          <StyledImage alt="logo" src={logoPic} />
          <StyledSpan>MEME GENERATOR</StyledSpan>
        </LogoWrapper>
      </HeaderContainer>
    </AppBar>
  )
}

import { AppBar } from '@mui/material'
import Link from 'next/link'

import { HeaderContainer, LogoWrapper, StyledImage, StyledSpan } from './styled'

export const Header = () => {
  return (
    <AppBar
      sx={{ bgcolor: '#9c27b0', height: '40px', margin: '25.5px 0' }}
      position="static"
    >
      <HeaderContainer>
        <LogoWrapper href="/">
          <StyledImage alt="logo" width={70} height={91} src="/logo.png" />
          <StyledSpan>MEME GENERATOR</StyledSpan>
        </LogoWrapper>
      </HeaderContainer>
    </AppBar>
  )
}

import { Container } from '@mui/system'
import { pxToRem } from '@utils/index'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const HeaderContainer = styled(Container)`
  position: relative;
`

export const StyledImage = styled(Image)`
  object-fit: contain;
`

export const LogoWrapper = styled(Link)`
  position: absolute;
  left: 0;
  top: -15px;
  display: flex;
  font-family: 'impact';
  font-size: 24px;
  /* justify-content: center; */
  align-items: center;
  -webkit-text-stroke: 1px black;
`

export const StyledSpan = styled.span`
  position: relative;
  top: -10px;
  left: 5px;
`

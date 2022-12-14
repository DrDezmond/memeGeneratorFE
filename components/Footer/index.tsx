import { Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../assets/logo.png'

import { StyledFooter } from './styled'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Image priority alt="logo" src={logo} />
        <Typography variant="body2">© 2022 MemeGeneratorAO,</Typography>
        <Typography>
          Created by{' '}
          <Link href="https://github.com/DrDezmond">Artem Yeldinov</Link> &{' '}
          <Link href="https://github.com/lanternofdarkness">
            Oleksiy Velychko
          </Link>
        </Typography>
      </Container>
    </StyledFooter>
  )
}

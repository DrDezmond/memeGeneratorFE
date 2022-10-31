import { Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import { StyledFooter } from './styled'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Image alt="logo" width={70} height={91} src="/logo.png" />
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

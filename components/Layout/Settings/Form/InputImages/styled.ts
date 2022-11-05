import { Button } from '@mui/material'
import styled from 'styled-components'

export const StyledButton = styled(Button)<{ isDragActive?: boolean }>`
  background-color: ${({ isDragActive }) =>
    console.log(isDragActive) || isDragActive
      ? 'rgba(128, 128, 128, 0.2)'
      : 'transparent'} !important;
  transition: 0.5s;
`

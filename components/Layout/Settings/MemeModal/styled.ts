import { Box } from '@mui/material'
import styled from 'styled-components'

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(18, 18, 18);
  border: 2px solid #000;
  box-shadow: 24;
`

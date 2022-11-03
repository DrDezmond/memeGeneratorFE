import { pxToRem } from '@utils/index'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  margin-top: ${pxToRem(14)};
  display: flex; /* defines flexbox */
  align-items: flex-end;
`

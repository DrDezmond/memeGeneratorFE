import { Container } from '@mui/system'
import { pxToRem } from '@utils/index'
import styled from 'styled-components'

export const LayoutWrapper = styled(Container)`
  padding-top: ${pxToRem(24)};
  display: flex !important;
  justify-content: space-between;
  gap: ${pxToRem(12)};
  height: 100%;
`

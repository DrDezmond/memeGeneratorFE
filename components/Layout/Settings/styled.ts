import { Card, Typography } from '@mui/material'
import { pxToRem } from '@utils/index'
import styled from 'styled-components'

export const SettingsWrapper = styled(Card)`
  padding: ${pxToRem(8)};
  flex: 1;
  position: relative;
  height: fit-content;
`

export const SettingsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${pxToRem(8)};
`

export const StyledTypography = styled(Typography)`
  margin-right: ${pxToRem(4)};
`

export const ButtonWrapper = styled.div`
  display: flex;
`

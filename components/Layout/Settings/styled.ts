import { Box, Card, Typography } from '@mui/material'
import { pxToRem } from '@utils/index'
import styled from 'styled-components'

export const SettingsWrapper = styled(Card)`
  padding: ${pxToRem(8)};
  flex: 1;
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

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(18, 18, 18);
  border: 2px solid #000;
  box-shadow: 24;
`

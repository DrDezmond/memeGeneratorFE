import { MenuItem, Select } from '@mui/material'
import { pxToRem } from '@utils/index'
import styled from 'styled-components'

export const StyledSelect = styled(Select)`
  min-width: ${pxToRem(120)};
  & .MuiInputBase-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  margin-bottom: ${pxToRem(8)};
`
export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
`

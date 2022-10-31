import { Card } from '@mui/material'
import { Orientations } from '@projectTypes/index'
import { pxToRem } from '@utils/index'
import styled, { css } from 'styled-components'

const orientationCss = (orientation: Orientations) => {
  const gridOptions = {
    [Orientations.single]: css`
      display: grid;
      grid-template-rows: 1fr;
      grid-gap: 2px;
    `,
    [Orientations.horizontal]: css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2px;
    `,
    [Orientations.vertical]: css`
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-gap: 2px;
    `,
    [Orientations.grid]: css`
      display: grid;
      grid-auto-rows: auto;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2px;
    `,
  }
  return gridOptions[orientation]
}

export const ImagePreviewWrapper = styled(Card)<{ orientation?: Orientations }>`
  padding: ${pxToRem(8)};
  flex: 3;
  ${({ orientation }) => orientationCss(orientation)}
  overflow-y: scroll;
`

export const NoImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #000;
  flex-direction: column;
`

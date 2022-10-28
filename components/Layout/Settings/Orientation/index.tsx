import { useCallback, useState } from 'react'
import { GridView, ViewStream, ViewWeek, WebAsset } from '@mui/icons-material'
import { InputLabel, SelectChangeEvent, Typography } from '@mui/material'
import { Orientations } from '@projectTypes/index'
import { useStore } from '@store/useStore'

import { StyledMenuItem, StyledSelect } from './styled'

export const Orientation = () => {
  const [orientation, setStore] = useStore(store => store.orientation)

  const handleChange = useCallback((e: SelectChangeEvent) => {
    setStore({
      orientation: e.target.value as Orientations,
      images: [],
    })
  }, [])

  return (
    <div>
      <InputLabel id="demo-simple-select-standard-label">
        Orientation
      </InputLabel>
      <StyledSelect
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={orientation}
        label="Orientation"
        onChange={handleChange}
      >
        <StyledMenuItem value={Orientations.single}>
          <Typography variant="body2">Single</Typography>{' '}
          <WebAsset color="action" />
        </StyledMenuItem>
        <StyledMenuItem value={Orientations.horizontal}>
          <Typography variant="body2">Horizontal</Typography>{' '}
          <ViewWeek color="action" />
        </StyledMenuItem>
        <StyledMenuItem value={Orientations.vertical}>
          <Typography variant="body2">Vertical</Typography>{' '}
          <ViewStream color="action" />
        </StyledMenuItem>
        <StyledMenuItem value={Orientations.grid}>
          <Typography variant="body2">Grid</Typography>{' '}
          <GridView color="action" />
        </StyledMenuItem>
      </StyledSelect>
    </div>
  )
}

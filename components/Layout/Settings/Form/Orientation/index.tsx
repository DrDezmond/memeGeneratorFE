import { useCallback } from 'react'
import { GridView, ViewStream, ViewWeek, WebAsset } from '@mui/icons-material'
import {
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
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
        <MenuItem value={Orientations.single}>
          <StyledMenuItem>
            <Typography variant="body2">Single</Typography>{' '}
            <WebAsset color="action" />
          </StyledMenuItem>
        </MenuItem>
        <MenuItem value={Orientations.horizontal}>
          <StyledMenuItem>
            <Typography variant="body2">Horizontal</Typography>{' '}
            <ViewWeek color="action" />
          </StyledMenuItem>
        </MenuItem>
        <MenuItem value={Orientations.vertical}>
          <StyledMenuItem>
            <Typography variant="body2">Vertical</Typography>{' '}
            <ViewStream color="action" />
          </StyledMenuItem>
        </MenuItem>
        <MenuItem value={Orientations.grid}>
          <StyledMenuItem>
            <Typography variant="body2">Grid</Typography>{' '}
            <GridView color="action" />
          </StyledMenuItem>
        </MenuItem>
      </StyledSelect>
    </div>
  )
}

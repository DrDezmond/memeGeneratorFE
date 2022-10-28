import { Slider, Typography } from '@mui/material'

import { FontSizeWrapper } from './styled'

function valuetext(value: number) {
  return `${value}px`
}

export const FontSize = () => {
  return (
    <FontSizeWrapper>
      <Typography variant="body2">Font size</Typography>{' '}
      <Slider
        aria-label="Font size"
        defaultValue={24}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={4}
        marks
        min={12}
        max={120}
        color="secondary"
      />
    </FontSizeWrapper>
  )
}

import { Slider, Typography } from '@mui/material'
import { useStore } from '@store/useStore'

import { FontSizeWrapper } from './styled'

function valuetext(value: number) {
  return `${value}px`
}

export const FontSize = () => {
  const [fontSize, setStore] = useStore(store => store.fontSize)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setStore({
      fontSize: newValue as number,
    })
  }

  return (
    <FontSizeWrapper>
      <Typography variant="body2">Font size</Typography>{' '}
      <Slider
        aria-label="Font size"
        value={fontSize}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={4}
        marks
        min={12}
        max={120}
        color="secondary"
        onChange={handleChange}
      />
    </FontSizeWrapper>
  )
}

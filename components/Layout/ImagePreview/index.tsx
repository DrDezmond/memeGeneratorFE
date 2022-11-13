import { useEffect, useRef } from 'react'
import { useTrueSizes } from '@hooks/useTrueSizes'
import { WarningAmber } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useStore } from '@store/useStore'

import { ImageWithText } from './ImageWithText'
import { ImagePreviewWrapper, NoImagePreview } from './styled'

const orientations = { single: 1, horizontal: 2, vertical: 2, grid: 4 }

export const ImagePreview = () => {
  const [orientation] = useStore(store => store.orientation)
  const [images, setStore] = useStore(store => store.images)
  const parentRef = useRef(null)

  const { widths, heights } = useTrueSizes(images, orientation, parentRef)

  const texts = {}
  images.forEach((_, i) => {
    texts[i] = ['', '']
  })

  useEffect(() => {
    setStore({
      texts,
    })
  }, [texts])

  return (
    <ImagePreviewWrapper ref={parentRef} orientation={orientation}>
      {images.length === 0 &&
        Array.from({ length: orientations[orientation] }, (_, i) => (
          <NoImagePreview key={i}>
            <WarningAmber sx={{ fontSize: 128 }} color="error" />
            <Typography variant="body1">No images uploaded yet</Typography>
          </NoImagePreview>
        ))}
      {images.length > 0 &&
        images.map((el, i) => (
          <ImageWithText key={el} src={el} i={i} w={widths[i]} h={heights[i]} />
        ))}
    </ImagePreviewWrapper>
  )
}

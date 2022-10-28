import { WarningAmber } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useStore } from '@store/useStore'
import Image from 'next/image'

import { ImagePreviewWrapper, NoImagePreview } from './styled'

const orientations = { single: 1, horizontal: 2, vertical: 2, grid: 4 }

export const ImagePreview = () => {
  const [orientation] = useStore(store => store.orientation)
  const [images] = useStore(store => store.images)

  return (
    <ImagePreviewWrapper
      orientation={(images.length === 0 && orientation) || undefined}
    >
      {images.length === 0 &&
        Array.from({ length: orientations[orientation] }, (_, i) => (
          <NoImagePreview key={i}>
            <WarningAmber sx={{ fontSize: 128 }} color="error" />
            <Typography variant="body1">No images uploaded yet</Typography>
          </NoImagePreview>
        ))}
      {images.length > 0 &&
        images.map(el => (
          <Image width={250} height={250} key={el} src={el} alt={''} />
        ))}
    </ImagePreviewWrapper>
  )
}

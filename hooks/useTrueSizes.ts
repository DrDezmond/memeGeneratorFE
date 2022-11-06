import { useEffect, useState } from 'react'
import { Orientations } from '@projectTypes/index'
import { maxHeight } from '@mui/system'
import { yellow } from '@mui/material/colors'

export const useTrueSizes = (images: string[], orientation: Orientations) => {
  const [w, setW] = useState<number[]>([])
  const [h, setH] = useState<number[]>([])
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [notResized, setNotResized] = useState(true)
  const maxWidth = 830

  const widths: number[] = [...w]
  const heights: number[] = [...h]

  useEffect(() => {
    if (!imagesLoaded) {
      images.forEach((image, i) => {
        var img = new Image()
        img.src = image
        img.onload = function () {
          widths[i] = img.width
          heights[i] = img.height
          if (i === images.length - 1) {
            setImagesLoaded(true)
            setW(widths)
            setH(heights)
          }
        }
      })
    }
  }, [images])

  if (imagesLoaded && notResized) {
    const minWidth = Math.min.apply(Math, w)
    const minHeight = Math.min.apply(Math, h)
    const sumWidth = w.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    
    const sumHeight = h.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    const sumWidthResized = sumWidth * (minHeight*images.length/sumHeight)
    const sumHeightResized = sumHeight * (minWidth*images.length/sumWidth)

    if (orientation == 'horizontal') {
      w.forEach((x, i) => {
        const newWidth = (minHeight / heights[i]) * (x/sumWidthResized) * maxWidth
        widths[i] = newWidth
        heights[i] = minHeight
      })
    } else if (orientation == 'vertical' || orientation == 'grid') {
      h.forEach((y, i) => {
        let newHeight = 0
        if ( orientation == 'grid'){
          newHeight = ((minWidth/sumWidth * maxWidth) / widths[i]) * y
          widths[i] = minWidth/sumWidth * maxWidth
        }
        else{
          newHeight = (minWidth / widths[i]) * y
          widths[i] = minWidth
        }
        heights[i] = newHeight
      })
    }

    setNotResized(false)
    setW(widths)
    setH(heights)
    setImagesLoaded(false)
    setNotResized(true)
  }

  return { widths: w, heights: h }
}

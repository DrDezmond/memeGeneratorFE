import { useEffect, useState } from 'react'
import { Orientations } from '@projectTypes/index'

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
    if (orientation == 'horizontal') {
      w.forEach((x, i) => {
        const newWidth = (minHeight / heights[i]) * x
        widths[i] = newWidth
        heights[i] = minHeight
      })
    } else if (orientation == 'vertical' || orientation == 'grid') {
      h.forEach((y, i) => {
        const newHeight = (minWidth / widths[i]) * y
        widths[i] = minWidth
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

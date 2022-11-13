import { RefObject, useLayoutEffect, useState } from 'react'

export const useContainerWidth = (ref: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const rc = window.getComputedStyle(ref.current)
    setWidth(
      ref.current.offsetWidth -
        parseFloat(rc.paddingLeft) -
        parseFloat(rc.paddingRight) -
        parseFloat(rc.paddingRight)
    )
  }, [ref])

  return width
}

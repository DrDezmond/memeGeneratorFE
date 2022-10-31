import { useRef } from 'react'
import { useStore } from '@store/useStore'
import Image from 'next/image'

import { ImageInputWrapper, StyledTextArea } from './styled'

export const ImageWithText = ({ src, i }) => {
  const [fontSize] = useStore(store => store.fontSize)
  const [texts, setStore] = useStore(store => store.texts)
  const topArea = useRef(null)
  const bottomArea = useRef(null)
  const textsChanged = {
    ...texts,
  }

  const onChange = (position: number, i: number) => {
    if (position === 0) {
      textsChanged[i][0] = topArea.current.value
    } else {
      textsChanged[i][1] = bottomArea.current.value
    }

    setStore({ texts: textsChanged })
  }

  return (
    <ImageInputWrapper>
      <StyledTextArea
        ref={topArea}
        top={true}
        fontSize={fontSize}
        onChange={e => {
          onChange(0, i)
        }}
      />
      <Image src={src} width={250} height={250} alt="uploaded image" />
      <StyledTextArea
        ref={bottomArea}
        onChange={e => {
          onChange(1, i)
        }}
        top={false}
        fontSize={fontSize}
      />
    </ImageInputWrapper>
  )
}

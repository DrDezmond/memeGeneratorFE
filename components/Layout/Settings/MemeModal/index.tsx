import { Modal } from '@mui/material'
import Image from 'next/image'

import { StyledBox } from './styled'

type MemeModalT = {
  meme: string
  setMeme: (v: string) => void
  handleReset: () => void
  uploadRef: React.RefObject<HTMLInputElement>
}

export const MemeModal = ({
  meme,
  setMeme,
  handleReset,
  uploadRef,
}: MemeModalT) => {
  return (
    <Modal
      open={!!meme}
      onClose={() => {
        setMeme('')
        handleReset()
        uploadRef.current.value = ''
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Image
          onClick={() => {
            window.location.href = meme
          }}
          alt="text"
          fill
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          src={meme}
        />
      </StyledBox>
    </Modal>
  )
}

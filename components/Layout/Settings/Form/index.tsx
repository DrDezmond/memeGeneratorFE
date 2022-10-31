import { Button } from '@mui/material'
import { useStore } from '@store/useStore'

import { FontSize } from '../FontSize'

import { InputImages } from './InputImages'
import { Orientation } from './Orientation'
import { ButtonWrapper } from './styled'

type FormT = {
  uploadRef: React.RefObject<HTMLInputElement>
  handleReset: () => void
  handleGenerateMeme: () => void
}

export const Form = ({ uploadRef, handleReset, handleGenerateMeme }: FormT) => {
  const [files] = useStore(store => store.files)

  return (
    <>
      <Orientation />
      <InputImages uploadRef={uploadRef} />
      <FontSize />
      <ButtonWrapper>
        <Button
          onClick={() => {
            handleReset()
            uploadRef.current.value = ''
          }}
        >
          Reset
        </Button>
        <Button
          disabled={files.length === 0}
          color="success"
          onClick={handleGenerateMeme}
        >
          Generate
        </Button>
      </ButtonWrapper>
    </>
  )
}

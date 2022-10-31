import { useCallback, useRef, useState } from 'react'
import { useMutationGenerateMeme } from '@api/useMutationGenerateMeme'
import { useMutationImagesUpload } from '@api/useMutationImagesUpload'
import { Settings as SettingsIcon } from '@mui/icons-material'
import { Orientations } from '@projectTypes/index'
import { initialStore } from '@store/Provider'
import { useStore } from '@store/useStore'

import { Form } from './Form'
import { Loader } from './Loader'
import { MemeModal } from './MemeModal'
import {
  SettingsTitleWrapper,
  SettingsWrapper,
  StyledTypography,
} from './styled'

export const Settings = () => {
  const [meme, setMeme] = useState(null)

  const [files, setStore] = useStore(store => store.files)
  const [texts] = useStore(store => store.texts)
  const [orientation] = useStore(store => store.orientation)
  const [fontSize] = useStore(store => store.fontSize)

  const uploadRef = useRef(null)

  const useUploadImages = useMutationImagesUpload()
  const useGenerateMeme = useMutationGenerateMeme()
  const isImagesLoading = useUploadImages.isLoading
  const { isLoading } = useGenerateMeme

  const handleReset = useCallback(() => {
    setStore({ ...initialStore })
  }, [])

  const handleGenerateMeme = useCallback(async () => {
    const formData = new FormData()
    files.forEach(file => {
      formData.append('images', file)
    })

    console.log(files)

    const generatorData = {
      texts,
      orientation:
        orientation === Orientations.single
          ? Orientations.horizontal
          : orientation,
      fontSize,
    }

    await useUploadImages.mutateAsync(formData)

    useGenerateMeme
      .mutateAsync(generatorData)
      .then(res => res.text())
      .then(res => {
        setMeme(res)
      })
  }, [files, fontSize, orientation, texts])

  return (
    <SettingsWrapper>
      <SettingsTitleWrapper>
        <StyledTypography variant="h5">Settings</StyledTypography>
        <SettingsIcon color="secondary" />
      </SettingsTitleWrapper>
      <Form
        uploadRef={uploadRef}
        handleReset={handleReset}
        handleGenerateMeme={handleGenerateMeme}
      />
      <Loader isLoading={isImagesLoading || isLoading} />
      <MemeModal
        meme={meme}
        setMeme={setMeme}
        uploadRef={uploadRef}
        handleReset={handleReset}
      />
    </SettingsWrapper>
  )
}

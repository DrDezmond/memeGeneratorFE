import React, { useCallback, useState } from 'react'
import { Settings as SettingsIcon } from '@mui/icons-material'
import { Box, Button, FormControl, Modal } from '@mui/material'
import { initialStore } from '@store/Provider'
import { useStore } from '@store/useStore'

import { FontSize } from './FontSize'
import { InputImages } from './InputImages'
import { Orientation } from './Orientation'
import {
  ButtonWrapper,
  SettingsTitleWrapper,
  SettingsWrapper,
  StyledBox,
  StyledTypography,
} from './styled'

export const Settings = () => {
  const [meme, setMeme] = useState(null)
  const [files, setStore] = useStore(store => store.files)
  const [texts] = useStore(store => store.texts)
  const [orientation] = useStore(store => store.orientation)
  const [fontSize] = useStore(store => store.fontSize)

  const handleReset = useCallback(() => {
    setStore({ ...initialStore })
  }, [])

  const handleGenerateMeme = useCallback(async () => {
    const formData = new FormData()
    files.forEach(file => {
      formData.append('images', file)
    })

    const generatorData = {
      texts,
      orientation,
      fontSize,
    }

    await fetch('https://meme-generator-al.herokuapp.com/upload-images', {
      body: formData,
      method: 'POST',
      mode: 'no-cors',
    })

    fetch('https://meme-generator-al.herokuapp.com/upload-generator-data', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8',
        Accept: 'application/json',
      },
      body: JSON.stringify(generatorData),
    })
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
      <FormControl>
        <Orientation />
        <InputImages />
        <FontSize />
        <ButtonWrapper>
          <Button onClick={handleReset}>Reset</Button>
          <Button color="success" onClick={handleGenerateMeme}>
            Generate
          </Button>
        </ButtonWrapper>
      </FormControl>
      <Modal
        open={!!meme}
        onClose={() => {
          setMeme('')
          handleReset()
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={meme}
          />
        </StyledBox>
      </Modal>
    </SettingsWrapper>
  )
}

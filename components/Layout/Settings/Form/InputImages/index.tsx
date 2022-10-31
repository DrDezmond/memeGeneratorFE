import { ChangeEvent } from 'react'
import { Button } from '@mui/material'
import { Orientations } from '@projectTypes/index'
import { useStore } from '@store/useStore'

type InputImagesT = {
  uploadRef: React.RefObject<HTMLInputElement>
}

export const InputImages = ({ uploadRef }: InputImagesT) => {
  const [images, setStore] = useStore(store => store.images)
  const [orientation] = useStore(store => store.orientation)

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(images)
    setStore({
      images: [],
      files: [],
    })
    const urlImages = []
    const tempFiles = []
    for (let i = 0; i < e.target.files.length; i++) {
      tempFiles.push(e.target.files[i])
      urlImages.push(URL.createObjectURL(e.target.files[i]))
    }

    setStore({
      images: urlImages,
      files: tempFiles,
    })
  }

  return (
    <div>
      <label htmlFor="upload">
        <input
          ref={uploadRef}
          id="upload"
          name="upload"
          hidden
          type="file"
          multiple={orientation === Orientations.single ? false : true}
          accept=".jpg, .jpeg, .png"
          onChange={handleFiles}
        />
        <Button
          className="btn-choose"
          color="secondary"
          variant="outlined"
          component="span"
        >
          {images.length === 0
            ? 'Choose Images'
            : `${images.length} images loaded`}
        </Button>
      </label>
    </div>
  )
}

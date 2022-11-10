import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Download } from '@mui/icons-material';
import { Orientations } from '@projectTypes/index';
import { useStore } from '@store/useStore';

import { StyledButton } from './styled';

type InputImagesT = {
  uploadRef: React.RefObject<HTMLInputElement>;
};

export const InputImages = ({ uploadRef }: InputImagesT) => {
  const [images, setStore] = useStore((store) => store.images);
  const [orientation] = useStore((store) => store.orientation);

  const handleFiles = useCallback((acceptedFiles) => {
    setStore({
      images: [],
      files: [],
    });
    const urlImages = [];
    const tempFiles = [];
    for (let i = 0; i < acceptedFiles.length; i++) {
      tempFiles.push(acceptedFiles[i]);
      urlImages.push(URL.createObjectURL(acceptedFiles[i]));
    }

    setStore({
      images: urlImages,
      files: tempFiles,
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFiles,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
    },
    multiple: orientation === Orientations.single ? false : true,
  });

  return (
    <div {...getRootProps()}>
      <label htmlFor="upload">
        <input id="upload" name="upload" {...getInputProps()} ref={uploadRef} />
        <StyledButton
          $isDragActive={isDragActive}
          className="btn-choose"
          color="secondary"
          variant="outlined"
        >
          {images.length === 0 ? (
            <>
              <Download />
              Choose Images
            </>
          ) : (
            `${images.length} images loaded`
          )}
        </StyledButton>
      </label>
    </div>
  );
};

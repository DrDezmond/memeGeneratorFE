import { useMutation } from '@tanstack/react-query'

export const useMutationImagesUpload = () => {
  return useMutation((formData: FormData) => {
    return fetch('https://meme-generator-al.herokuapp.com/upload-images', {
      body: formData!,
      method: 'POST',
      mode: 'cors',
    })
  })
}

import { useMutation } from '@tanstack/react-query'

export const useMutationImagesUpload = () => {
  return useMutation((formData: FormData) => {
    return fetch(`${process.env.NEXT_PUBLIC_HOST}/upload-images`, {
      body: formData!,
      method: 'POST',
    })
  })
}

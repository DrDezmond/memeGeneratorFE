import { Orientations } from '@projectTypes/index'
import { useMutation } from '@tanstack/react-query'

type GeneratorDataType = {
  texts: {
    [key: number]: string[]
  }
  orientation: Orientations
  fontSize: number
}

export const useMutationGenerateMeme = () => {
  return useMutation((generatorData: GeneratorDataType) => {
    return fetch(
      'https://meme-generator-al.herokuapp.com/upload-generator-data',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain; charset=UTF-8',
          Accept: 'application/json',
        },
        body: JSON.stringify(generatorData),
      }
    )
  })
}

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
    return fetch(`${process.env.NEXT_PUBLIC_HOST}/upload-generator-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8',
        Accept: 'application/json',
      },
      body: JSON.stringify(generatorData),
    })
  })
}

import React from 'react'
import { CircularProgress } from '@mui/material'

import { LoaderWrapper } from './styled'

type LoaderT = {
  isLoading: boolean
}

export const Loader = ({ isLoading }: LoaderT) => {
  return (
    <LoaderWrapper isLoading={isLoading}>
      <CircularProgress color="secondary" />
    </LoaderWrapper>
  )
}

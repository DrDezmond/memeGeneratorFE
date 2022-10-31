import { createContext } from 'react'
import { Orientations } from '@projectTypes/index'

import { UsesStoreReturnDataType, useStoreData } from './useStoreData'

export type StoreValuesType = {
  orientation: Orientations
  fontSize: number
  images: string[]
  texts: { [key: number]: string[] }
  files: File[]
}

export const initialStore = {
  orientation: Orientations.single,
  fontSize: 24,
  images: [],
  texts: { 0: ['', ''] },
  files: [],
}
export const StoreContext = createContext<UsesStoreReturnDataType | null>(null)

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={useStoreData()}>
    {children}
  </StoreContext.Provider>
)

import { useCallback, useRef } from 'react'

import { initialStore, StoreValuesType } from './Provider'

export type UsesStoreReturnDataType = ReturnType<typeof useStoreData>

export const useStoreData = () => {
  const store = useRef<StoreValuesType>(initialStore)
  const subscribers = useRef(new Set<() => void>())

  const get = useCallback(() => store.current, [])

  const set = useCallback((value: Partial<StoreValuesType>) => {
    store.current = {
      ...store.current,
      ...value,
    }
    subscribers.current.forEach(callback => callback())
  }, [])

  const subscribe = useCallback((cb: () => void) => {
    subscribers.current.add(cb)

    return () => {
      subscribers.current.delete(cb)
    }
  }, [])

  return {
    get,
    set,
    subscribe,
  }
}

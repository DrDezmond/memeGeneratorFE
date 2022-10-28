import { useContext, useSyncExternalStore } from 'react'

import { StoreContext, StoreValuesType } from './Provider'

export const useStore = <SelectorOutput>(
  selector: (store: StoreValuesType) => SelectorOutput
): [SelectorOutput, (value: Partial<StoreValuesType>) => void] => {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('Store not found')
  }

  const state = useSyncExternalStore(
    store.subscribe,
    () => selector(store.get()),
    () => selector(store.get())
  )

  return [state, store.set]
}

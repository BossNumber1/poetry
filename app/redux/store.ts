import { profileReducer } from '../redux/reducers/profileReducer'
import { configureStore } from '@reduxjs/toolkit'

export function makeStore() {
  return configureStore({
    reducer: { profile: profileReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export default store

import { configureStore } from '@reduxjs/toolkit'
import fetch from '../redux/action'

export default configureStore({
    reducer: {
      get: fetch,
    },
  });
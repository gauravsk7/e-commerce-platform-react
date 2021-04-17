import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

const middlewares = [logger]   //This makes the app more scalable, we can add as many middlewares as needed later

export const store = createStore(rootReducer, applyMiddleware(...middlewares))   //the ... syntax here ensures that the array elements are passed to the function as independent arguments

export const persistor = persistStore(store)

export default { store, persistor }
import { 
  createStore, 
  compose, 
  combineReducers, 
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import dataReducer from './reducers/dataReducer'

const initState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  data: dataReducer
})

const store = createStore(
  reducers,
  initState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store
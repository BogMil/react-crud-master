import { combineReducers } from 'redux'
import {reactableReducer} from './components/reactable/reactable.reducer'

export const rootReducer = combineReducers({
    reactable : reactableReducer
})

export type AppState = ReturnType<typeof rootReducer>
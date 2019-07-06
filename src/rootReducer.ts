import { combineReducers } from 'redux'
import {reactableReducer} from './components/reactable/reactable.reducer'
import {crudModalReducer} from './components/crudModal/crudModal.reducer'

export const rootReducer = combineReducers({
    reactable : reactableReducer,
    crudModal:crudModalReducer
})

export type AppState = ReturnType<typeof rootReducer>
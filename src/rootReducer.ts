import { combineReducers } from 'redux'
import {reactableReducer} from './components/reactable/reactable.reducer'
import {crudModalReducer} from './components/crudModal/crudModal.reducer'
import { ColMenuModalReducer } from './components/colMenuModal/colMenuModal.reducer';
import { ContextMenuModalReducer } from './components/contextMenuModal/contextMenuModal.reducer';


export const rootReducer = combineReducers({
    reactable : reactableReducer,
    crudModal:crudModalReducer,
    colMenuModal:ColMenuModalReducer,
    contextMenuModal:ContextMenuModalReducer,
})
export type AppState = ReturnType<typeof rootReducer>
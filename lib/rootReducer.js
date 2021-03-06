import { combineReducers } from 'redux';
import { reactCrudMasterReducer } from './components/reactCrudMaster/reactCrudMaster.reducer';
import { crudModalReducer } from './components/crudModal/crudModal.reducer';
import { ColMenuModalReducer } from './components/colMenuModal/colMenuModal.reducer';
import { ContextMenuModalReducer } from './components/contextMenuModal/contextMenuModal.reducer';
export var rootReducer = combineReducers({
    reactCrudMaster: reactCrudMasterReducer,
    crudModal: crudModalReducer,
    colMenuModal: ColMenuModalReducer,
    contextMenuModal: ContextMenuModalReducer,
});
//# sourceMappingURL=rootReducer.js.map
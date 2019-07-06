import { combineReducers } from 'redux';
import { reactableReducer } from './components/reactable/reactable.reducer';
import { crudModalReducer } from './components/crudModal/crudModal.reducer';
export var rootReducer = combineReducers({
    reactable: reactableReducer,
    crudModal: crudModalReducer
});
//# sourceMappingURL=rootReducer.js.map
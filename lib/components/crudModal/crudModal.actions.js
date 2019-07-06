import { CRUD_MODAL } from '../../actions/actionNamespaces';
import { CrudModalActionTypeNames } from './crudModal.types';
var namespace = CRUD_MODAL;
export function closeModal() {
    return {
        type: CrudModalActionTypeNames.CLOSE_MODAL,
        payload: null,
        namespace: namespace
    };
}
export function openModal() {
    return {
        type: CrudModalActionTypeNames.OPEN_MODAL,
        payload: null,
        namespace: namespace
    };
}
export function generateColNamePropertiesInRowData(colModels) {
    return {
        type: CrudModalActionTypeNames.GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA,
        payload: {
            colModels: colModels
        },
        namespace: namespace
    };
}
export function onRowDataChange(name, value) {
    return {
        type: CrudModalActionTypeNames.ON_ROW_DATA_CHANGE,
        payload: {
            name: name,
            value: value
        },
        namespace: namespace
    };
}
//# sourceMappingURL=crudModal.actions.js.map
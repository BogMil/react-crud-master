var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { initialCrudModalStateProps, CrudModalActionTypeNames } from './crudModal.types';
import update from 'immutability-helper';
import { CRUD_MODAL } from '../../actions/actionNamespaces';
export var initialState = {
    colModels: [],
    data: [],
    width: 0,
    sortColumn: null,
    selectedRow: null,
    startOffset: 0,
    columnToResize: null,
    show: false,
    reactableId: Date.now(),
    modalState: null,
    tableWidth: 0,
    emptyModalState: null
};
export function crudModalReducer(state, action) {
    var _a;
    if (state === void 0) { state = initialCrudModalStateProps(); }
    if (action.namespace != CRUD_MODAL)
        return state;
    switch (action.type) {
        case CrudModalActionTypeNames.CLOSE_MODAL: {
            return Object.assign({}, __assign({}, state), { show: false, rowData: state.emptyRowData });
        }
        case CrudModalActionTypeNames.OPEN_MODAL: {
            return Object.assign({}, __assign({}, state), { show: true });
        }
        case CrudModalActionTypeNames.GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA: {
            var typedAction = action;
            var rowData_1 = {};
            typedAction.payload.colModels.map(function (colModel) {
                rowData_1[colModel.name] = "";
            });
            return Object.assign({}, __assign({}, state), { rowData: rowData_1, emptyRowData: rowData_1 });
        }
        case CrudModalActionTypeNames.ON_ROW_DATA_CHANGE: {
            var typedAction = action;
            return update(state, { rowData: (_a = {}, _a[typedAction.payload.name] = { $set: typedAction.payload.value }, _a) });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=crudModal.reducer.js.map
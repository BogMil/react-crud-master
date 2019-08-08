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
import { ReactCrudMasterActionTypeNames, initialReactCrudMasterStateProps, } from './reactCrudMaster.types';
import update from 'immutability-helper';
import { REACT_CRUD_MASTER } from '../../actions/actionNamespaces';
export var initialState = {
    colModels: [],
    data: [],
    width: 0,
    sortColumn: null,
    selectedRow: null,
    startOffset: 0,
    columnToResize: null,
    show: false,
    RCMID: Date.now(),
    modalState: null,
    tableWidth: 0,
    emptyModalState: null
};
export function reactCrudMasterReducer(state, action) {
    if (state === void 0) { state = initialReactCrudMasterStateProps(); }
    if (action.namespace != REACT_CRUD_MASTER)
        return state;
    switch (action.type) {
        case ReactCrudMasterActionTypeNames.SET_COL_MODELS: {
            action = action;
            return Object.assign({}, __assign({}, state), {
                colModels: action.payload.colModels,
                tableWidth: action.payload.tableWidth,
            });
        }
        case ReactCrudMasterActionTypeNames.SET_DATA: {
            var typedAction = action;
            return Object.assign({}, __assign({}, state), {
                data: typedAction.payload.data
            });
        }
        case ReactCrudMasterActionTypeNames.RESIZE_COLUMN:
            action = action;
            var pageX_1 = action.payload.e.pageX;
            var colModels = state.colModels.map(function (colModel) {
                if (colModel.name == state.columnToResize.name) {
                    if (state.startOffset + pageX_1 >= state.columnToResize.minWidth) {
                        colModel.width = state.startOffset + pageX_1;
                    }
                }
                return colModel;
            });
            var tableWidth_1 = 0;
            colModels.forEach(function (colModel) {
                tableWidth_1 += colModel.width;
            });
            var newState = update(state, { colModels: { $set: colModels }, tableWidth: { $set: tableWidth_1 } });
            return newState;
        case ReactCrudMasterActionTypeNames.SET_COLUMN_TO_RESIZE: {
            var typedAction = action;
            var _a = __assign({}, typedAction.payload), column = _a.column, e = _a.e;
            if (column != null)
                return Object.assign({}, __assign({}, state), { columnToResize: column, startOffset: e.target.parentNode.offsetWidth - e.pageX });
            return Object.assign({}, __assign({}, state), { columnToResize: null });
        }
        case ReactCrudMasterActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH: {
            var tableBody = document.getElementById("CMID-" + state.RCMID);
            return Object.assign({}, __assign({}, state), { width: tableBody.offsetWidth });
        }
        case ReactCrudMasterActionTypeNames.SELECT_ROW: {
            var typedAction = action;
            return Object.assign({}, __assign({}, state), { selectedRow: typedAction.payload.row });
        }
        case ReactCrudMasterActionTypeNames.CHANGE_ORDER_DIRECTION: {
            var typedAction_1 = action;
            var colModels_1 = state.colModels.map(function (column) {
                if (column.name == typedAction_1.payload.column.name) {
                    if (column.orderDirection === "asc")
                        column.orderDirection = "desc";
                    else if (column.orderDirection === "desc")
                        column.orderDirection = "";
                    else
                        column.orderDirection = "asc";
                }
                else {
                    column.orderDirection = "";
                }
                return column;
            });
            return Object.assign({}, __assign({}, state), { colModels: colModels_1 });
        }
        case ReactCrudMasterActionTypeNames.SET_TABLE_TITLE: {
            var typedAction = action;
            return Object.assign({}, __assign({}, state), { tableTitleProp: typedAction.payload.tableTitle });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=reactCrudMaster.reducer.js.map
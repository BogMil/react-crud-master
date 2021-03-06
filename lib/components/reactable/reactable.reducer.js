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
import { ReactableActionTypeNames, initialReactableStateProps, } from './reactable.types';
import update from 'immutability-helper';
import { REACTABLE } from '../../actions/actionNamespaces';
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
export function reactableReducer(state, action) {
    if (state === void 0) { state = initialReactableStateProps(); }
    if (action.namespace != REACTABLE)
        return state;
    switch (action.type) {
        case ReactableActionTypeNames.SET_COL_MODELS: {
            action = action;
            return Object.assign({}, __assign({}, state), {
                colModels: action.payload.colModels,
                tableWidth: action.payload.tableWidth,
            });
        }
        case ReactableActionTypeNames.SET_DATA: {
            var typedAction = action;
            return Object.assign({}, __assign({}, state), {
                data: typedAction.payload.data
            });
        }
        case ReactableActionTypeNames.RESIZE_COLUMN:
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
        case ReactableActionTypeNames.SET_COLUMN_TO_RESIZE: {
            var typedAction = action;
            var _a = __assign({}, typedAction.payload), column = _a.column, e = _a.e;
            if (column != null)
                return Object.assign({}, __assign({}, state), { columnToResize: column, startOffset: e.target.parentNode.offsetWidth - e.pageX });
            return Object.assign({}, __assign({}, state), { columnToResize: null });
        }
        case ReactableActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH: {
            var tableBody = document.getElementById(state.reactableId + "-reactable");
            return Object.assign({}, __assign({}, state), { width: tableBody.offsetWidth });
        }
        case ReactableActionTypeNames.SELECT_ROW: {
            var typedAction = action;
            return Object.assign({}, __assign({}, state), { selectedRow: typedAction.payload.row });
        }
        case ReactableActionTypeNames.CHANGE_ORDER_DIRECTION: {
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
        default:
            return state;
    }
}
//# sourceMappingURL=reactable.reducer.js.map
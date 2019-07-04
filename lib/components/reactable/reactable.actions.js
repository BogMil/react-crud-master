import { ReactableActionTypeNames } from './reactable.types';
import { REACTABLE } from '../../actions/actionNamespaces';
import cloneDeep from 'lodash/cloneDeep';
var namespace = REACTABLE;
export function setColModels(colModels) {
    var clonedColModels = cloneDeep(colModels);
    var tableWidth = 0;
    clonedColModels.forEach(function (colModel) {
        tableWidth += colModel.width;
        colModel.showColMenuModal = false;
    });
    var x = {
        type: ReactableActionTypeNames.SET_COL_MODELS,
        payload: {
            colModels: clonedColModels,
            tableWidth: tableWidth
        },
        namespace: namespace
    };
    return x;
}
export function resizeColumn(e) {
    return {
        type: ReactableActionTypeNames.RESIZE_COLUMN,
        payload: {
            e: e,
        },
        namespace: namespace,
    };
}
export function setColumnToResize(column, e) {
    if (column === void 0) { column = null; }
    if (e === void 0) { e = null; }
    return {
        type: ReactableActionTypeNames.SET_COLUMN_TO_RESIZE,
        payload: {
            e: e,
            column: column
        },
        namespace: namespace,
    };
}
export function setInitialTableoffsetWidth() {
    return {
        type: ReactableActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH,
        namespace: namespace,
        payload: null
    };
}
//# sourceMappingURL=reactable.actions.js.map
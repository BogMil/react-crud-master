var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import { ReactableActionTypeNames } from './reactable.types';
import { REACTABLE } from '../../actions/actionNamespaces';
import cloneDeep from 'lodash/cloneDeep';
import * as CrudModalActions from '../crudModal/crudModal.actions';
var namespace = REACTABLE;
export function privateSetColModels(colModels) {
    var clonedColModels = cloneDeep(colModels);
    var tableWidth = 0;
    clonedColModels.forEach(function (colModel) {
        tableWidth += colModel.width;
        colModel.showColMenuModal = false;
    });
    return {
        type: ReactableActionTypeNames.SET_COL_MODELS,
        payload: {
            colModels: clonedColModels,
            tableWidth: tableWidth
        },
        namespace: namespace
    };
}
export var setColModels = function (colModels) {
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(privateSetColModels(colModels));
            dispatch(CrudModalActions.generateColNamePropertiesInRowData(colModels));
            return [2 /*return*/];
        });
    }); };
};
export function setData(data) {
    var clonedData = cloneDeep(data);
    return {
        type: ReactableActionTypeNames.SET_DATA,
        payload: { data: clonedData },
        namespace: namespace,
    };
}
export function resizeColumn(e) {
    return {
        type: ReactableActionTypeNames.RESIZE_COLUMN,
        payload: { e: e, },
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
export function resetTableoffsetWidth() {
    return {
        type: ReactableActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH,
        namespace: namespace,
        payload: null
    };
}
export function changeOrderDirection(column) {
    return {
        type: ReactableActionTypeNames.CHANGE_ORDER_DIRECTION,
        namespace: namespace,
        payload: { column: column }
    };
}
export function selectRow(row) {
    return {
        type: ReactableActionTypeNames.SELECT_ROW,
        namespace: namespace,
        payload: { row: row }
    };
}
//# sourceMappingURL=reactable.actions.js.map
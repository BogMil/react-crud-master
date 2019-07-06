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
import { initialColMenuModalStateProps, ColMenuModalActionTypeNames } from './ColMenuModal.types';
import { COL_MENU_MODAL } from '../../actions/actionNamespaces';
export function ColMenuModalReducer(state, action) {
    if (state === void 0) { state = initialColMenuModalStateProps(); }
    if (action.namespace != COL_MENU_MODAL)
        return state;
    switch (action.type) {
        case ColMenuModalActionTypeNames.OPEN_MODAL: {
            var typedAction = action;
            return Object.assign({}, __assign({}, state), { show: true, colModel: typedAction.payload.colModel });
        }
        case ColMenuModalActionTypeNames.CLOSE_MODAL: {
            return Object.assign({}, __assign({}, state), { show: false, colModel: null });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=colMenuModal.reducer.js.map
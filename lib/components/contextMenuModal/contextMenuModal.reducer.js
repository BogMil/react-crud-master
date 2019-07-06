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
import { initialContextMenuModalStateProps, ContextMenuModalActionTypeNames } from './ContextMenuModal.types';
import { CONTEXT_MENU_MODAL } from '../../actions/actionNamespaces';
export function ContextMenuModalReducer(state, action) {
    if (state === void 0) { state = initialContextMenuModalStateProps(); }
    if (action.namespace != CONTEXT_MENU_MODAL)
        return state;
    switch (action.type) {
        case ContextMenuModalActionTypeNames.SET_CONTEXT_MENU_TRIGGER_REF: {
            var typedAction = action;
            return Object.assign({}, __assign({}, state), { contextMenuTrigger: typedAction.payload.ref });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=contextMenuModal.reducer.js.map
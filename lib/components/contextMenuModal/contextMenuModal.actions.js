import { ContextMenuModalActionTypeNames } from './ContextMenuModal.types';
import { CONTEXT_MENU_MODAL } from '../../actions/actionNamespaces';
var namespace = CONTEXT_MENU_MODAL;
export function setContextMenuTriggerRef(c) {
    console.log(c);
    return {
        type: ContextMenuModalActionTypeNames.SET_CONTEXT_MENU_TRIGGER_REF,
        payload: {
            ref: c
        },
        namespace: namespace
    };
}
//# sourceMappingURL=contextMenuModal.actions.js.map
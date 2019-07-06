import { ColMenuModalActionTypeNames } from './colMenuModal.types';
import { COL_MENU_MODAL } from '../../actions/actionNamespaces';
var namespace = COL_MENU_MODAL;
export function openModal(colModel) {
    return {
        type: ColMenuModalActionTypeNames.OPEN_MODAL,
        payload: {
            colModel: colModel
        },
        namespace: namespace
    };
}
export function closeModal() {
    return {
        type: ColMenuModalActionTypeNames.CLOSE_MODAL,
        payload: null,
        namespace: namespace
    };
}
//# sourceMappingURL=colMenuModal.actions.js.map
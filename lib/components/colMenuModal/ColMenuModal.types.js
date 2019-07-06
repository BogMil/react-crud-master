import { ColModel } from "../../types/ColModel";
export var ColMenuModalActionTypeNames = {
    OPEN_MODAL: "OPEN_MODAL",
    CLOSE_MODAL: 'CLOSE_MODAL'
};
export var initialState = function () {
    return {};
};
export var initialColMenuModalStateProps = function () {
    return {
        colModel: new ColModel(),
        show: false,
    };
};
//# sourceMappingURL=ColMenuModal.types.js.map
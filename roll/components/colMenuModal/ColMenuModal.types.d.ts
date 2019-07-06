import { ColModel } from "../../types/ColModel";
import { IReduxAction } from "../../types/IReduxAction";
export declare const ColMenuModalActionTypeNames: {
    OPEN_MODAL: string;
    CLOSE_MODAL: string;
};
export interface OpenModalRetType extends IReduxAction {
    type: typeof ColMenuModalActionTypeNames.OPEN_MODAL;
    payload: {
        colModel: ColModel | null;
    };
}
export interface CloseModalRetType extends IReduxAction {
    type: typeof ColMenuModalActionTypeNames.CLOSE_MODAL;
    payload: null;
}
export declare type ColMenuModalActionType = OpenModalRetType | CloseModalRetType;
export interface ColMenuModalState {
}
export declare const initialState: () => ColMenuModalState;
export interface ColMenuModalOwnProps {
}
export declare const initialColMenuModalStateProps: () => {
    colModel: ColModel;
    show: boolean;
};
export interface ColMenuModalStateProps {
    colModel: ColModel;
    show: boolean;
}
export interface ColMenuModalDispatchProps {
    closeColMenuModel: () => void;
}
export declare type ColMenuModalProps = ColMenuModalOwnProps & ColMenuModalStateProps & ColMenuModalDispatchProps;
//# sourceMappingURL=ColMenuModal.types.d.ts.map
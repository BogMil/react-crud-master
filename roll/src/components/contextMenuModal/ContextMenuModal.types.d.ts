import { IReduxAction } from "../../types/IReduxAction";
export declare const ContextMenuModalActionTypeNames: {
    SET_CONTEXT_MENU_TRIGGER_REF: string;
};
export interface SetContextMenuTriggerRefRetType extends IReduxAction {
    type: typeof ContextMenuModalActionTypeNames.SET_CONTEXT_MENU_TRIGGER_REF;
    payload: {
        ref: any;
    };
}
export declare type ContextMenuModalActionType = SetContextMenuTriggerRefRetType;
export interface ContextMenuModalState {
}
export declare const initialState: () => ContextMenuModalState;
export interface ContextMenuModalOwnProps {
}
export declare const initialContextMenuModalStateProps: () => {
    contextMenuTrigger: null;
    RCMID: number;
};
export interface ContextMenuModalStateProps {
    contextMenuTrigger: any;
    RCMID: number;
}
export interface ContextMenuModalDispatchProps {
    setContextMenuTriggerRef: (ref: any) => void;
}
export declare type ContextMenuModalProps = ContextMenuModalOwnProps & ContextMenuModalStateProps & ContextMenuModalDispatchProps;
//# sourceMappingURL=ContextMenuModal.types.d.ts.map
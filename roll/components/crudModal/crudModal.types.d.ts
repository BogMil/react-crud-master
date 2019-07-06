import { ColModel } from "../../types/ColModel";
import { IReduxAction } from "../../types/IReduxAction";
export declare const CrudModalActionTypeNames: {
    CLOSE_MODAL: string;
    OPEN_MODAL: string;
    GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA: string;
};
export interface CloseModalRetType extends IReduxAction {
    type: typeof CrudModalActionTypeNames.CLOSE_MODAL;
    payload: null;
}
export interface OpenModalRetType extends IReduxAction {
    type: typeof CrudModalActionTypeNames.OPEN_MODAL;
    payload: null;
}
export interface GenerateColNamePropertiesInRowDataRetType extends IReduxAction {
    type: typeof CrudModalActionTypeNames.GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA;
    payload: {
        colModels: ColModel[];
    };
}
export declare type CrudModalActionType = CloseModalRetType | OpenModalRetType | GenerateColNamePropertiesInRowDataRetType;
export interface CrudModalState {
}
export declare const initialState: () => CrudModalState;
export interface CrudModalOwnProps {
}
export declare const initialCrudModalStateProps: () => CrudModalStateProps;
export interface IRowData {
    [key: string]: any | null;
}
export interface CrudModalStateProps {
    show: boolean;
    colModels: ColModel[];
    rowData: IRowData;
    emptyRowData: IRowData;
}
export interface CrudModalDispatchProps {
    closeCrudModal: () => void;
}
export declare type CrudModalProps = CrudModalOwnProps & CrudModalStateProps & CrudModalDispatchProps;
//# sourceMappingURL=crudModal.types.d.ts.map
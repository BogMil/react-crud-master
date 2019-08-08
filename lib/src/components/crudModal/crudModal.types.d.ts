import { ColModel } from "../../types/colModel";
import { IReduxAction } from "../../types/IReduxAction";
export declare const CrudModalActionTypeNames: {
    CLOSE_MODAL: string;
    OPEN_MODAL: string;
    GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA: string;
    ON_ROW_DATA_CHANGE: string;
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
export interface OnRowDataChangeRetType extends IReduxAction {
    type: typeof CrudModalActionTypeNames.ON_ROW_DATA_CHANGE;
    payload: {
        name: string;
        value: any;
    };
}
export declare type CrudModalActionType = CloseModalRetType | OpenModalRetType | GenerateColNamePropertiesInRowDataRetType | OnRowDataChangeRetType;
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
    onRowDataChange: (name: string, value: any) => void;
}
export declare type CrudModalProps = CrudModalOwnProps & CrudModalStateProps & CrudModalDispatchProps;
//# sourceMappingURL=crudModal.types.d.ts.map
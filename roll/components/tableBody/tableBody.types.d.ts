import { ColModel } from "../../types/ColModel";
import { IReduxAction } from "../../types/IReduxAction";
export declare const ReactableActionTypeNames: {
    SET_COL_MODELS: string;
};
export interface SetColModelsRetType extends IReduxAction {
    type: typeof ReactableActionTypeNames.SET_COL_MODELS;
    payload: {
        colModels: ColModel[];
        tableWidth: number;
    };
}
export declare type TableBodyActionType = SetColModelsRetType;
export interface TableBodyState {
}
export declare const initialState: () => TableBodyState;
export interface TableBodyOwnProps {
}
export declare const initialTableBodyStateProps: () => {};
export interface TableBodyStateProps {
    data: any[];
    width: number;
    sortColumn: any;
    selectedRow: any;
    startOffset: number | null;
    columnToResize: ColModel | null;
    show: boolean | null;
    RCMID: number | null;
    modalState: any;
    emptyModalState: any;
    tableWidth: number;
    colModels: ColModel[];
    contextTrigger: any;
}
export interface TableBodyDispatchProps {
    selectRow: (row: any) => void;
}
export declare type TableBodyProps = TableBodyOwnProps & TableBodyStateProps & TableBodyDispatchProps;
//# sourceMappingURL=tableBody.types.d.ts.map
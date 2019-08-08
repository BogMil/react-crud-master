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
export declare type TableHeaderActionType = SetColModelsRetType;
export interface TableHeaderState {
}
export declare const initialState: () => TableHeaderState;
export interface TableHeaderOwnProps {
}
export declare const initialTableHeaderStateProps: () => {};
export interface TableHeaderStateProps {
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
}
export interface TableHeaderDispatchProps {
    setColModels: (colModels: ColModel[]) => void;
    resizeColumn: (e: MouseEvent) => void;
    setColumnToResize: (column?: ColModel | null, e?: any | null) => void;
    resetTableoffsetWidth: () => void;
    changeOrderDirection: (column: ColModel) => void;
    openColMenuModel: (colModel: ColModel) => void;
}
export declare type TableHeaderProps = TableHeaderOwnProps & TableHeaderStateProps & TableHeaderDispatchProps;
//# sourceMappingURL=tableHeader.types.d.ts.map
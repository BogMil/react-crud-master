import { ColModel } from "../../types/ColModel";
import { IReduxAction } from "../../types/IReduxAction";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
export declare const ReactCrudMasterActionTypeNames: {
    SET_COL_MODELS: string;
    RESIZE_COLUMN: string;
    SET_COLUMN_TO_RESIZE: string;
    SET_INITIAL_TABLE_OFFSET_WIDTH: string;
    CHANGE_ORDER_DIRECTION: string;
    SELECT_ROW: string;
    SET_DATA: string;
    SET_TABLE_TITLE: string;
};
export interface SetColModelsRetType extends IReduxAction {
    type: typeof ReactCrudMasterActionTypeNames.SET_COL_MODELS;
    payload: {
        colModels: ColModel[];
        tableWidth: number;
    };
}
export interface SetDataRetType extends IReduxAction {
    type: typeof ReactCrudMasterActionTypeNames.SET_DATA;
    payload: {
        data: any[];
    };
}
export interface ResizeColumnRetType extends IReduxAction {
    type: typeof ReactCrudMasterActionTypeNames.RESIZE_COLUMN;
    payload: {
        e: MouseEvent;
    };
}
export interface SetColumnToResizeRetType extends IReduxAction {
    type: typeof ReactCrudMasterActionTypeNames.RESIZE_COLUMN;
    payload: {
        e: any | null;
        column: ColModel | null;
    };
}
export interface ResetTableoffsetWidthRetType extends IReduxAction {
    type: typeof ReactCrudMasterActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH;
}
export interface ChangeOrderDirectionRetType extends IReduxAction {
    type: typeof ReactCrudMasterActionTypeNames.CHANGE_ORDER_DIRECTION;
    payload: {
        column: ColModel;
    };
}
export interface SelectRowRetType extends IReduxAction {
    type: typeof ReactCrudMasterActionTypeNames.SELECT_ROW;
    payload: {
        row: any;
    };
}
export interface SetTableTitleRetType extends IReduxAction {
    type: typeof ReactCrudMasterActionTypeNames.SET_TABLE_TITLE;
    payload: {
        tableTitle: string;
    };
}
export declare type ReactCrudMasterActionType = SetColModelsRetType | ResizeColumnRetType | SetColumnToResizeRetType | ResetTableoffsetWidthRetType | ChangeOrderDirectionRetType | SelectRowRetType | SetDataRetType;
export interface ReactCrudMasterState {
    colModels: ColModel[];
    data: any[];
    width: number;
    sortColumn: any;
    selectedRow: any;
    startOffset: number;
    columnToResize: ColModel | null;
    show: boolean;
    RCMID: number;
    modalState: any;
    emptyModalState: any;
    tableWidth: number;
}
export declare const initialState: () => ReactCrudMasterState;
export interface ReactCrudMasterOwnProps {
    colModelsProp: ColModel[];
    dataProp: any[];
    tableTitle?: string;
}
export declare const initialReactCrudMasterStateProps: () => ReactCrudMasterStateProps;
export interface ReactCrudMasterStateProps {
    colModels: ColModel[];
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
    tableTitleProp: string;
}
export interface ReactCrudMasterDispatchProps {
    setColModels: (colModels: ColModel[]) => ThunkAction<Promise<void>, {}, {}, AnyAction>;
    setData: (data: any[]) => void;
    resizeColumn: (e: MouseEvent) => void;
    setColumnToResize: (column?: ColModel | null, e?: any | null) => void;
    resetTableoffsetWidth: () => void;
    setTableTitle: (tableTitle: string) => void;
}
export declare type ReactCrudMasterProps = ReactCrudMasterOwnProps & ReactCrudMasterStateProps & ReactCrudMasterDispatchProps;
//# sourceMappingURL=reactCrudMaster.types.d.ts.map
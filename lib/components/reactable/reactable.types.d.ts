import { ColModel } from "../../types/ColModel";
import { IReduxAction } from "../../types/IReduxAction";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
export declare const ReactableActionTypeNames: {
    SET_COL_MODELS: string;
    RESIZE_COLUMN: string;
    SET_COLUMN_TO_RESIZE: string;
    SET_INITIAL_TABLE_OFFSET_WIDTH: string;
    CHANGE_ORDER_DIRECTION: string;
    SELECT_ROW: string;
    SET_DATA: string;
};
export interface SetColModelsRetType extends IReduxAction {
    type: typeof ReactableActionTypeNames.SET_COL_MODELS;
    payload: {
        colModels: ColModel[];
        tableWidth: number;
    };
}
export interface SetDataRetType extends IReduxAction {
    type: typeof ReactableActionTypeNames.SET_DATA;
    payload: {
        data: any[];
    };
}
export interface ResizeColumnRetType extends IReduxAction {
    type: typeof ReactableActionTypeNames.RESIZE_COLUMN;
    payload: {
        e: MouseEvent;
    };
}
export interface SetColumnToResizeRetType extends IReduxAction {
    type: typeof ReactableActionTypeNames.RESIZE_COLUMN;
    payload: {
        e: any | null;
        column: ColModel | null;
    };
}
export interface ResetTableoffsetWidthRetType extends IReduxAction {
    type: typeof ReactableActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH;
}
export interface ChangeOrderDirectionRetType extends IReduxAction {
    type: typeof ReactableActionTypeNames.CHANGE_ORDER_DIRECTION;
    payload: {
        column: ColModel;
    };
}
export interface SelectRowRetType extends IReduxAction {
    type: typeof ReactableActionTypeNames.SELECT_ROW;
    payload: {
        row: any;
    };
}
export declare type ReactableActionType = SetColModelsRetType | ResizeColumnRetType | SetColumnToResizeRetType | ResetTableoffsetWidthRetType | ChangeOrderDirectionRetType | SelectRowRetType | SetDataRetType;
export interface ReactableState {
    colModels: ColModel[];
    data: any[];
    width: number;
    sortColumn: any;
    selectedRow: any;
    startOffset: number;
    columnToResize: ColModel | null;
    show: boolean;
    reactableId: number;
    modalState: any;
    emptyModalState: any;
    tableWidth: number;
}
export declare const initialState: () => ReactableState;
export interface ReactableOwnProps {
    colModelsProp: ColModel[];
    dataProp: any[];
}
export declare const initialReactableStateProps: () => {
    colModels: never[];
    data: never[];
    width: number;
    sortColumn: null;
    selectedRow: null;
    startOffset: null;
    columnToResize: null;
    show: null;
    reactableId: number;
    modalState: null;
    emptyModalState: null;
    tableWidth: number;
};
export interface ReactableStateProps {
    colModels: ColModel[];
    data: any[];
    width: number;
    sortColumn: any;
    selectedRow: any;
    startOffset: number | null;
    columnToResize: ColModel | null;
    show: boolean | null;
    reactableId: number | null;
    modalState: any;
    emptyModalState: any;
    tableWidth: number;
}
export interface ReactableDispatchProps {
    setColModels: (colModels: ColModel[]) => ThunkAction<Promise<void>, {}, {}, AnyAction>;
    setData: (data: any[]) => void;
    resizeColumn: (e: MouseEvent) => void;
    setColumnToResize: (column?: ColModel | null, e?: any | null) => void;
    resetTableoffsetWidth: () => void;
}
export declare type ReactableProps = ReactableOwnProps & ReactableStateProps & ReactableDispatchProps;
//# sourceMappingURL=reactable.types.d.ts.map
import { ColModel } from "../../types/ColModel";
import { IReduxAction } from "../../types/IReduxAction";
export declare const TableFooterActionTypeNames: {
    GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA: string;
};
export interface GenerateColNamePropertiesInRowDataRetType extends IReduxAction {
    type: typeof TableFooterActionTypeNames.GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA;
    payload: {
        colModels: ColModel[];
    };
}
export declare type TableFooterActionType = GenerateColNamePropertiesInRowDataRetType;
export interface TableFooterState {
}
export declare const initialState: () => TableFooterState;
export interface TableFooterOwnProps {
    tableWidth: number;
}
export declare const initialTableFooterStateProps: () => {};
export interface TableFooterStateProps {
}
export interface TableFooterDispatchProps {
    openCrudModal: () => void;
}
export declare type TableFooterProps = TableFooterOwnProps & TableFooterStateProps & TableFooterDispatchProps;
//# sourceMappingURL=tableFooter.types.d.ts.map
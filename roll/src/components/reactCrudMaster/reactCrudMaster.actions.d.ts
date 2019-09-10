import { ReactCrudMasterActionType } from './reactCrudMaster.types';
import { ColModel } from '../../types/colModel';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
export declare function privateSetColModels(colModels: ColModel[]): ReactCrudMasterActionType;
export declare const setColModels: (colModels: ColModel[]) => ThunkAction<Promise<void>, {}, {}, AnyAction>;
export declare function setData(data: any[]): ReactCrudMasterActionType;
export declare function resizeColumn(e: MouseEvent): ReactCrudMasterActionType;
export declare function setColumnToResize(column?: (ColModel | null), e?: any): ReactCrudMasterActionType;
export declare function resetTableoffsetWidth(): ReactCrudMasterActionType;
export declare function changeOrderDirection(column: ColModel): ReactCrudMasterActionType;
export declare function selectRow(row: any): ReactCrudMasterActionType;
export declare function setTableTitle(tableTitle: any): ReactCrudMasterActionType;
//# sourceMappingURL=reactCrudMaster.actions.d.ts.map
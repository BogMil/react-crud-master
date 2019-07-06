import { ReactableActionType } from './reactable.types';
import { ColModel } from '../../types/ColModel';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
export declare function privateSetColModels(colModels: ColModel[]): ReactableActionType;
export declare const setColModels: (colModels: ColModel[]) => ThunkAction<Promise<void>, {}, {}, AnyAction>;
export declare function setData(data: any[]): ReactableActionType;
export declare function resizeColumn(e: MouseEvent): ReactableActionType;
export declare function setColumnToResize(column?: (ColModel | null), e?: any): ReactableActionType;
export declare function resetTableoffsetWidth(): ReactableActionType;
export declare function changeOrderDirection(column: ColModel): ReactableActionType;
export declare function selectRow(row: any): ReactableActionType;
//# sourceMappingURL=reactable.actions.d.ts.map
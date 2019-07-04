import { ReactableActionType } from './reactable.types';
import { ColModel } from '../../types/ColModel';
export declare function setColModels(colModels: ColModel[]): ReactableActionType;
export declare function resizeColumn(e: MouseEvent): ReactableActionType;
export declare function setColumnToResize(column?: (ColModel | null), e?: any): ReactableActionType;
export declare function resetTableoffsetWidth(): ReactableActionType;
export declare function changeOrderDirection(column: ColModel): ReactableActionType;
//# sourceMappingURL=reactable.actions.d.ts.map
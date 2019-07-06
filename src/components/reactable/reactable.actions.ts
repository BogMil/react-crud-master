import { ReactableActionTypeNames, ResizeColumnRetType, SetColModelsRetType, ReactableActionType } from './reactable.types'
import { ColModel } from '../../types/ColModel';
import { REACTABLE } from '../../actions/actionNamespaces';
import cloneDeep from 'lodash/cloneDeep';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as CrudModalActions from '../crudModal/crudModal.actions'

const namespace = REACTABLE;

export function privateSetColModels(colModels: ColModel[]): ReactableActionType {
    let clonedColModels = cloneDeep(colModels);

    let tableWidth: number = 0;
    clonedColModels.forEach((colModel: ColModel) => {
        tableWidth += colModel.width;
        colModel.showColMenuModal = false;
    });

    

    return  {
        type: ReactableActionTypeNames.SET_COL_MODELS,
        payload: {
            colModels: clonedColModels,
            tableWidth
        },
        namespace
    }
}

export const setColModels = (colModels:ColModel[]): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(privateSetColModels(colModels));
        dispatch(CrudModalActions.generateColNamePropertiesInRowData(colModels))
    }
}

export function resizeColumn(e: MouseEvent): ReactableActionType {
    return {
        type:ReactableActionTypeNames.RESIZE_COLUMN,
        payload:{
            e,
        },
        namespace,
    }
}

export function setColumnToResize(column:(ColModel | null) = null,e: any =null): ReactableActionType {
    return {
        type:ReactableActionTypeNames.SET_COLUMN_TO_RESIZE,
        payload:{
            e,
            column
        },
        namespace,
    }
}

export function resetTableoffsetWidth(): ReactableActionType {
    return {
        type:ReactableActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH,
        namespace,
        payload:null
    }
}


export function changeOrderDirection(column : ColModel): ReactableActionType {
    return {
        type:ReactableActionTypeNames.CHANGE_ORDER_DIRECTION,
        namespace,
        payload:{
            column
        }
    }
}
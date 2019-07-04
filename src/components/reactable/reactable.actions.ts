import { ReactableActionTypeNames, ResizeColumnRetType, SetColModelsRetType, ReactableActionType } from './reactable.types'
import { ColModel } from '../../types/ColModel';
import { REACTABLE } from '../../actions/actionNamespaces';
import cloneDeep from 'lodash/cloneDeep';

const namespace = REACTABLE;

export function setColModels(colModels: ColModel[]): ReactableActionType {
    let clonedColModels = cloneDeep(colModels);

    let tableWidth: number = 0;
    clonedColModels.forEach((colModel: ColModel) => {
        tableWidth += colModel.width;
        colModel.showColMenuModal = false;
    });
    let x= {
        type: ReactableActionTypeNames.SET_COL_MODELS,
        payload: {
            colModels: clonedColModels,
            tableWidth
        },
        namespace
    }
    return x;
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

export function setInitialTableoffsetWidth(): ReactableActionType {
    return {
        type:ReactableActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH,
        namespace,
        payload:null
    }
}
import { ColModel } from '../../types/ColModel';
import { CRUD_MODAL } from '../../actions/actionNamespaces';
import cloneDeep from 'lodash/cloneDeep';
import { CrudModalActionType, CrudModalActionTypeNames, GenerateColNamePropertiesInRowDataRetType } from './crudModal.types';

const namespace = CRUD_MODAL;

export function closeModal(): CrudModalActionType {
    return {
        type: CrudModalActionTypeNames.CLOSE_MODAL,
        payload:null,
        namespace
    }
}

export function openModal(): CrudModalActionType {
    console.log('opened modal')
    return {
        type: CrudModalActionTypeNames.OPEN_MODAL,
        payload:null,
        namespace
    }
}

export function generateColNamePropertiesInRowData(colModels:ColModel[]): GenerateColNamePropertiesInRowDataRetType {

    return {
        type: CrudModalActionTypeNames.GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA,
        payload:{
            colModels
        },
        namespace
    }
}
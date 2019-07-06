import { CrudModalStateProps, initialCrudModalStateProps, CrudModalActionType, CrudModalActionTypeNames, CloseModalRetType, GenerateColNamePropertiesInRowDataRetType, IRowData } from './crudModal.types'
import update from 'immutability-helper'
import { ColModel } from '../../types/ColModel';
export const initialState = {
    colModels: [],
    data: [],
    width: 0,
    sortColumn: null,
    selectedRow: null,
    startOffset: 0,
    columnToResize: null,
    show: false,
    reactableId: Date.now(),
    modalState: null,
    tableWidth: 0,
    emptyModalState: null
}

export function crudModalReducer(
    state: CrudModalStateProps = initialCrudModalStateProps(),
    action: CrudModalActionType
): CrudModalStateProps {
    switch (action.type) {

        case CrudModalActionTypeNames.CLOSE_MODAL: {
            return Object.assign({}, { ...state },{show:false});
        }

        case CrudModalActionTypeNames.OPEN_MODAL: {
            return Object.assign({}, { ...state },{show:true});
        }

        case CrudModalActionTypeNames.GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA: {
            let typedAction = <GenerateColNamePropertiesInRowDataRetType> action;
            let rowData : IRowData={};

            typedAction.payload.colModels.map((colModel: ColModel) => {
                rowData[colModel.name] = "";
            });
            console.log(rowData)
            return Object.assign({}, { ...state },{rowData,emptyRowData:rowData});
        }

        default:
            return state
    }
}
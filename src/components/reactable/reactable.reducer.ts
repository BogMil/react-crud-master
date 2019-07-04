import {
    // ReactableState,
    // ChatActions,
    ReactableActionType,
    ReactableActionTypeNames,
    ReactableStateProps,
    initialReactableStateProps,
    SetColModelsRetType,
    ResizeColumnRetType,
    SetColumnToResizeRetType,
    ChangeOrderDirectionRetType,
} from './reactable.types'
import update from 'immutability-helper'
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

export function reactableReducer(
    state: ReactableStateProps = initialReactableStateProps(),
    action: ReactableActionType
): ReactableStateProps {
    switch (action.type) {

        case ReactableActionTypeNames.SET_COL_MODELS:
            action = <SetColModelsRetType>action

            return Object.assign({}, { ...state },
                {
                    colModels: action.payload.colModels,
                    tableWidth: action.payload.tableWidth,
                });

        case ReactableActionTypeNames.RESIZE_COLUMN:
            action = <ResizeColumnRetType>action;

            let pageX = action.payload.e.pageX
            let colModels = state.colModels.map(colModel => {
                if (colModel.name == state.columnToResize!.name) {
                    if (state.startOffset! + pageX >= state.columnToResize!.minWidth) {
                        colModel.width = state.startOffset! + pageX;
                    }
                }
                return colModel;
            });

            let tableWidth = 0;
            colModels.forEach(colModel => {
                tableWidth += colModel.width;
            });
            let newState = update(state, { colModels: { $set: colModels }, tableWidth: { $set: tableWidth } });

            return newState;

        case ReactableActionTypeNames.SET_COLUMN_TO_RESIZE:
            {
                let typedAction = <SetColumnToResizeRetType>action;
                let { column, e } = { ...typedAction.payload }

                if (column != null)
                    return Object.assign({}, { ...state }, { columnToResize: column, startOffset: e.target.parentNode.offsetWidth - e.pageX })
                return Object.assign({}, { ...state }, { columnToResize: null })
            }

        case ReactableActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH:
            {
                let tableBody = document.getElementById(`${state.reactableId}-reactable`)!;
                return Object.assign({}, { ...state }, { width: tableBody.offsetWidth })
            }

        case ReactableActionTypeNames.CHANGE_ORDER_DIRECTION:
            {
                let typedAction = <ChangeOrderDirectionRetType>action;
                let colModels = state.colModels.map((column) => {

                    if (column.name == typedAction.payload.column.name) {

                        if (column.orderDirection === "asc")
                            column.orderDirection = "desc";
                        else if (column.orderDirection === "desc")
                            column.orderDirection = "";
                        else column.orderDirection = "asc";
                    }else{
                        column.orderDirection=""
                    }

                    return column;
                });
                
                return Object.assign({}, { ...state }, { colModels: colModels })
            }
        default:
            return state
    }
}
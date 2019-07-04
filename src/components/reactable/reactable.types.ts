import { ColModel } from "../../types/ColModel";
import { IReduxAction } from "../../types/IReduxAction";
import { resizeColumn, setColumnToResize, changeOrderDirection } from "./reactable.actions";

export const ReactableActionTypeNames = {
  SET_COL_MODELS: "SET_COL_MODELS",
  RESIZE_COLUMN:"RESIZE_COLUMN",
  SET_COLUMN_TO_RESIZE:"SET_COLUMN_TO_RESIZE",
  SET_INITIAL_TABLE_OFFSET_WIDTH:'SET_INITIAL_TABLE_OFFSET_WIDTH',
  CHANGE_ORDER_DIRECTION : 'CHANGE_ORDER_DIRECTION'
}

export interface SetColModelsRetType extends IReduxAction {
  type: typeof ReactableActionTypeNames.SET_COL_MODELS
  payload: {
    colModels: ColModel[],
    tableWidth: number
  },
}


export interface ResizeColumnRetType extends IReduxAction {
  type: typeof ReactableActionTypeNames.RESIZE_COLUMN
  payload:{
    e: MouseEvent,
  }
}

export interface SetColumnToResizeRetType extends IReduxAction {
  type: typeof ReactableActionTypeNames.RESIZE_COLUMN
  payload:{
    e: any | null,
    column:ColModel | null,
  }
}

export interface ResetTableoffsetWidthRetType extends IReduxAction {
  type: typeof ReactableActionTypeNames.SET_INITIAL_TABLE_OFFSET_WIDTH
}

export interface ChangeOrderDirectionRetType extends IReduxAction {
  type: typeof ReactableActionTypeNames.CHANGE_ORDER_DIRECTION
  payload: {
    column:ColModel
  },
}

export type ReactableActionType = SetColModelsRetType | ResizeColumnRetType | SetColumnToResizeRetType | ResetTableoffsetWidthRetType | ChangeOrderDirectionRetType

// export const ReactableActionTypes


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

export const initialState = () => {
  return {
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
  } as ReactableState
}

// export interface ReactableProps {
//   colModels: ColModel[];
//   data: any[];
// }

export interface ReactableOwnProps {
  colModelsProp: ColModel[];
  dataProp: any[];
}

export const initialReactableStateProps = () => {
  return {
    colModels: [],
    data: [],
    width: 0,
    sortColumn: null,
    selectedRow: null,
    startOffset: null,
    columnToResize: null,
    show: null,
    reactableId: Date.now(),
    modalState: null,
    emptyModalState: null,
    tableWidth: 0
  }
};

export interface ReactableStateProps {
  colModels: ColModel[];
  data: any[];
  width: number ;
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
  setColModels: (colModels: ColModel[]) => void,
  resizeColumn: (e: MouseEvent) => void,
  setColumnToResize:(column?:ColModel | null,e?:any | null)=>void,
  resetTableoffsetWidth :()=>void,
  changeOrderDirection:(column:ColModel)=>void,
}

export type ReactableProps = ReactableOwnProps & ReactableStateProps & ReactableDispatchProps;


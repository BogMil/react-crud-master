import { ColModel } from "../../types/ColModel";
import { IReduxAction } from "../../types/IReduxAction";

export const ContextMenuModalActionTypeNames = {
  SET_CONTEXT_MENU_TRIGGER_REF: "SET_CONTEXT_MENU_TRIGGER_REF",
}

export interface SetContextMenuTriggerRefRetType extends IReduxAction {
  type: typeof ContextMenuModalActionTypeNames.SET_CONTEXT_MENU_TRIGGER_REF
  payload: {
    ref:any
  },
}

export type ContextMenuModalActionType = SetContextMenuTriggerRefRetType 

export interface ContextMenuModalState {
  
}

export const initialState = () => {
  return {
  
  } as ContextMenuModalState
}

export interface ContextMenuModalOwnProps {
}

export const initialContextMenuModalStateProps = () => {
  return {
      contextMenuTrigger:null,
      reactableId:Date.now()
  }
};

export interface ContextMenuModalStateProps {
  contextMenuTrigger : any;
  reactableId:number
}

export interface ContextMenuModalDispatchProps {
    setContextMenuTriggerRef:(ref:any)=>void
}

export type ContextMenuModalProps = ContextMenuModalOwnProps & ContextMenuModalStateProps & ContextMenuModalDispatchProps;


import { ReactCrudMasterActionType, ReactCrudMasterStateProps } from './reactCrudMaster.types';
export declare const initialState: {
    colModels: never[];
    data: never[];
    width: number;
    sortColumn: null;
    selectedRow: null;
    startOffset: number;
    columnToResize: null;
    show: boolean;
    RCMID: number;
    modalState: null;
    tableWidth: number;
    emptyModalState: null;
};
export declare function reactCrudMasterReducer(state: ReactCrudMasterStateProps | undefined, action: ReactCrudMasterActionType): ReactCrudMasterStateProps;
//# sourceMappingURL=reactCrudMaster.reducer.d.ts.map
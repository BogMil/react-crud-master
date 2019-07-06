import { CrudModalStateProps, CrudModalActionType } from './crudModal.types';
export declare const initialState: {
    colModels: never[];
    data: never[];
    width: number;
    sortColumn: null;
    selectedRow: null;
    startOffset: number;
    columnToResize: null;
    show: boolean;
    reactableId: number;
    modalState: null;
    tableWidth: number;
    emptyModalState: null;
};
export declare function crudModalReducer(state: CrudModalStateProps | undefined, action: CrudModalActionType): CrudModalStateProps;
//# sourceMappingURL=crudModal.reducer.d.ts.map
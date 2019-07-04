import { ReactableActionType, ReactableStateProps } from './reactable.types';
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
export declare function reactableReducer(state: ReactableStateProps | undefined, action: ReactableActionType): ReactableStateProps;
//# sourceMappingURL=reactable.reducer.d.ts.map
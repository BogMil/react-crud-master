export var ReactableActionTypeNames = {
    SET_COL_MODELS: "SET_COL_MODELS",
    RESIZE_COLUMN: "RESIZE_COLUMN",
    SET_COLUMN_TO_RESIZE: "SET_COLUMN_TO_RESIZE",
    SET_INITIAL_TABLE_OFFSET_WIDTH: 'SET_INITIAL_TABLE_OFFSET_WIDTH',
    CHANGE_ORDER_DIRECTION: 'CHANGE_ORDER_DIRECTION',
    SELECT_ROW: 'SELECT_ROW',
    SET_DATA: 'SET_DATA'
};
export var initialState = function () {
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
    };
};
export var initialReactableStateProps = function () {
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
    };
};
//# sourceMappingURL=reactable.types.js.map
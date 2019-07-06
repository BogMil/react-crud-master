export var CrudModalActionTypeNames = {
    CLOSE_MODAL: "CLOSE_MODAL",
    OPEN_MODAL: "OPEN_MODAL",
    GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA: "GENERATE_COL_NAME_PROPERTIES_IN_ROW_DATA"
};
export var initialState = function () {
    return {};
};
export var initialCrudModalStateProps = function () {
    return {
        show: false,
        colModels: [],
        rowData: {},
        emptyRowData: {}
    };
};
//# sourceMappingURL=crudModal.types.js.map
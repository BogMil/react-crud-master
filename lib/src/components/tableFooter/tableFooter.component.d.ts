import { Component } from "react";
import '../reactCrudMaster/reactCrudMaster.css';
import { TableFooterOwnProps, TableFooterProps, TableFooterState } from "./tableFooter.types";
declare class TableFooterComponent extends Component<TableFooterProps, TableFooterState> {
    constructor(props: TableFooterProps);
    render: () => JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof TableFooterComponent, Pick<TableFooterProps, "tableWidth"> & TableFooterOwnProps>;
export default _default;
//# sourceMappingURL=tableFooter.component.d.ts.map
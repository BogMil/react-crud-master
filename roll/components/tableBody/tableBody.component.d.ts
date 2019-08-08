import { Component } from "react";
import '../contexMenu.css';
import '../reactCrudMaster/reactCrudMaster.css';
import { TableBodyProps, TableBodyState, TableBodyOwnProps } from "./tableBody.types";
declare class TableBodyComponent extends Component<TableBodyProps, TableBodyState> {
    constructor(props: TableBodyProps);
    onClickOnRow: (row: any) => void;
    onRightClickOnRow: (e: any, row: any) => void;
    openContextMenu: (e: any) => void;
    testScroll: (e: any) => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof TableBodyComponent, Pick<TableBodyProps, never> & TableBodyOwnProps>;
export default _default;
//# sourceMappingURL=tableBody.component.d.ts.map
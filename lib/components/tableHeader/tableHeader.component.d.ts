import { Component } from "react";
import '../contexMenu.css';
import '../reactable/reactable.css';
import { ColModel } from "../../types/ColModel";
import { TableHeaderProps, TableHeaderState, TableHeaderOwnProps } from "./tableHeader.types";
import './tableHeader.css';
declare class TableHeaderComponent extends Component<TableHeaderProps, TableHeaderState> {
    constructor(props: TableHeaderProps);
    componentDidMount: () => void;
    render(): JSX.Element;
    setColumnToResize(e: any, column: ColModel): void;
    onThClick: (column: ColModel) => void;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof TableHeaderComponent, Pick<TableHeaderProps, never> & TableHeaderOwnProps>;
export default _default;
//# sourceMappingURL=tableHeader.component.d.ts.map
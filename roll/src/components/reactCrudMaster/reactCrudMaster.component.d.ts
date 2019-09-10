import { Component } from "react";
import '../contexMenu.css';
import './reactCrudMaster.css';
import { ReactCrudMasterProps, ReactCrudMasterState, ReactCrudMasterOwnProps } from "./reactCrudMaster.types";
declare class ReactCrudMasterComponent extends Component<ReactCrudMasterProps, ReactCrudMasterState> {
    constructor(props: ReactCrudMasterProps);
    componentDidMount: () => void;
    componentWillMount: () => void;
    componentWillUnmount: () => void;
    handleWindowSizeChange: () => void;
    disableResizingColumnIfInResizeMode: () => void;
    resizeColumnIfInResizeMode: (e: MouseEvent) => void;
    enableTextSelectionOnPage: () => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ReactCrudMasterComponent, Pick<ReactCrudMasterProps, "colModelsProp" | "dataProp" | "tableTitle"> & ReactCrudMasterOwnProps>;
export default _default;
//# sourceMappingURL=reactCrudMaster.component.d.ts.map
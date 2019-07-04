import { Component } from "react";
import '../contexMenu.css';
import './reactable.css';
import { ReactableProps, ReactableState, ReactableOwnProps } from "./reactable.types";
import { ColModel } from "../../types/ColModel";
declare class ReactableComponent extends Component<ReactableProps, ReactableState> {
    constructor(props: ReactableProps);
    setData: (data: any) => void;
    componentDidMount: () => void;
    setInitialTableoffsetWidth: () => void;
    componentWillMount: () => void;
    disableResizingColumnIfInResizeMode: () => void;
    resizeColumnIfInResizeMode: (e: MouseEvent) => void;
    enableTextSelectionOnPage: () => void;
    componentWillUnmount: () => void;
    handleWindowSizeChange: () => void;
    onThClick: (colName: string) => void;
    onClickOnRow: (row: any) => void;
    render(): JSX.Element;
    contextTrigger: any;
    onRightClickOnRow: (e: any, row: any) => void;
    openContextMenu: (e: any) => void;
    openColMenuModel: (columnName: string) => void;
    closeColMenuModel: (columnName: string) => void;
    testScroll: (e: any) => void;
    onModalInputChange: (name: string, value: any) => void;
    openModal: () => void;
    openModalToEdit: () => void;
    handleClose: () => void;
    setColumnToResize(e: any, column: ColModel): void;
    onResizing: () => void;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ReactableComponent, Pick<ReactableProps, "colModelsProp" | "dataProp"> & ReactableOwnProps>;
export default _default;
//# sourceMappingURL=reactable.component.d.ts.map
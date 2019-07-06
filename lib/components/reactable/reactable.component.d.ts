import { Component } from "react";
import '../contexMenu.css';
import './reactable.css';
import { ReactableProps, ReactableState, ReactableOwnProps } from "./reactable.types";
declare class ReactableComponent extends Component<ReactableProps, ReactableState> {
    constructor(props: ReactableProps);
    componentDidMount: () => void;
    componentWillMount: () => void;
    componentWillUnmount: () => void;
    disableResizingColumnIfInResizeMode: () => void;
    resizeColumnIfInResizeMode: (e: MouseEvent) => void;
    enableTextSelectionOnPage: () => void;
    handleWindowSizeChange: () => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ReactableComponent, Pick<ReactableProps, "colModelsProp" | "dataProp"> & ReactableOwnProps>;
export default _default;
//# sourceMappingURL=reactable.component.d.ts.map
import { Component } from "react";
import '../contexMenu.css';
import '../reactable/reactable.css';
import { ColMenuModalProps, ColMenuModalState, ColMenuModalOwnProps } from "./ColMenuModal.types";
declare class ColMenuModalComponent extends Component<ColMenuModalProps, ColMenuModalState> {
    constructor(props: ColMenuModalProps);
    componentDidMount: () => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ColMenuModalComponent, Pick<ColMenuModalProps, never> & ColMenuModalOwnProps>;
export default _default;
//# sourceMappingURL=colMenuModal.component.d.ts.map
import { Component } from "react";
import '../contexMenu.css';
import '../reactCrudMaster/reactCrudMaster.css';
import { CrudModalOwnProps, CrudModalState, CrudModalProps } from "./crudModal.types";
declare class CrudModalComponent extends Component<CrudModalProps, CrudModalState> {
    constructor(props: CrudModalProps);
    componentDidMount: () => void;
    handleClose: () => void;
    onRowDataChange: (name: string, value: any) => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof CrudModalComponent, Pick<CrudModalProps, never> & CrudModalOwnProps>;
export default _default;
//# sourceMappingURL=crudModal.component.d.ts.map
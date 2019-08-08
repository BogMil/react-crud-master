import { Component } from 'react';
import { ColModel } from './types/ColModel';
interface ReactCrudMasterProps {
    data: any;
    colModels: ColModel[];
}
declare class ReactCrudMaster extends Component<ReactCrudMasterProps> {
    constructor(props: ReactCrudMasterProps);
    store: import("redux").Store<{
        reactCrudMaster: import("./components/reactCrudMaster/reactCrudMaster.types").ReactCrudMasterStateProps;
        crudModal: import("./components/crudModal/crudModal.types").CrudModalStateProps;
        colMenuModal: import("./components/colMenuModal/colMenuModal.types").ColMenuModalStateProps;
        contextMenuModal: import("./components/contextMenuModal/ContextMenuModal.types").ContextMenuModalStateProps;
    }, import("redux").AnyAction> & {
        dispatch: unknown;
    };
    render(): JSX.Element;
}
export default ReactCrudMaster;
export { ColModel } from './types/ColModel';
//# sourceMappingURL=index.d.ts.map
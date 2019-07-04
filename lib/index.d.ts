import { Component } from 'react';
import { ColModel } from './types/ColModel';
interface ReactCrudMasterProps {
    data: any;
    colModels: ColModel[];
}
declare class ReactCrudMaster extends Component<ReactCrudMasterProps> {
    constructor(props: ReactCrudMasterProps);
    store: import("redux").Store<{
        reactable: import("./components/reactable/reactable.types").ReactableStateProps;
    }, import("redux").AnyAction>;
    render(): JSX.Element;
}
export default ReactCrudMaster;
export { ColModel } from './types/ColModel';
//# sourceMappingURL=index.d.ts.map
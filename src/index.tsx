import React, { Component } from 'react'
import { createStore } from 'redux';
import { rootReducer, AppState } from './rootReducer';
import { connect, Provider } from 'react-redux';
import ReactableComponent from './components/reactable/reactable.component';
import { ReactableOwnProps } from './components/reactable/reactable.types';
import {ColModel} from './types/ColModel'

interface ReactCrudMasterProps {
    data:any,colModels:ColModel[]
}

class ReactCrudMaster extends Component<ReactCrudMasterProps>{

    constructor(props: ReactCrudMasterProps) {
        super(props);
    }

    store = createStore(rootReducer);


    render() {
        return (
            <Provider store={this.store} >
                <ReactableComponent dataProp={this.props.data} colModelsProp={this.props.colModels} />
            </Provider>
        )
    }
}


export default ReactCrudMaster
export {ColModel} from './types/ColModel'
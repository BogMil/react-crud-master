import React, { Component } from "react";
import {
    Card, Row, Col
} from "react-bootstrap";
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu'
import '../contexMenu.css';
import './reactable.css';

import TableFooter from "../tableFooter/tableFooter.component"
import { connect } from 'react-redux'
import { ReactableProps, ReactableState, initialState, ReactableStateProps, ReactableDispatchProps, ReactableOwnProps } from "./reactable.types";
import { ColModel } from "../../types/ColModel";
import { AppState } from '../../rootReducer'
import * as ReactableActions from './reactable.actions'
import TableHeader from '../tableHeader/tableHeader.component'
import TableBody from '../tableBody/tableBody.component'
import CrudModal from '../crudModal/crudModal.component'
import ColMenuModal from '../colMenuModal/colMenuModal.component'
import ContextMenuModal from '../contextMenuModal/contextMenuModal.component'

import { ThunkDispatch } from "redux-thunk";

class ReactableComponent extends Component<ReactableProps, ReactableState>{
    constructor(props: ReactableProps) {
        super(props);
        this.state = initialState();
    }

    componentDidMount = () => {

        this.props.setColModels(this.props.colModelsProp);
        this.props.setData(this.props.dataProp);
        this.props.resetTableoffsetWidth();

        document.getElementById(`${this.props.reactableId}-reactable`)!.addEventListener("mouseup", () => {
            this.disableResizingColumnIfInResizeMode()
        });

        document.getElementById(`${this.props.reactableId}-reactable`)!.addEventListener("mousemove", (e: MouseEvent) => {
            this.resizeColumnIfInResizeMode(e);
        });
    };

    componentWillMount = () => {
        window.addEventListener("resize", this.handleWindowSizeChange);
    };

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.handleWindowSizeChange);
    };

    disableResizingColumnIfInResizeMode = () => {
        if (this.props.columnToResize == null)
            return;

        this.props.setColumnToResize()
        this.enableTextSelectionOnPage();
    }

    resizeColumnIfInResizeMode = (e: MouseEvent) => {
        if (this.props.columnToResize != null) {
            this.props.resizeColumn(e);
        }
    }

    enableTextSelectionOnPage = () => {
        document.body.style.webkitUserSelect = "";
        document.body.style.msUserSelect = "";
        document.body.style.userSelect = "";
    }

    handleWindowSizeChange = () => {
        this.props.resetTableoffsetWidth();
    };

    render() {

        return (
            <>
                <Card id={`${this.props.reactableId}-reactable`} style={{ minWidth: 360, borderRadius: 0 }}>
                    <Card.Header style={{ padding: 5 }} as="h5" >Featured</Card.Header>
                    <Card.Body style={{ padding: 0 }}>

                        <div id={`reactable-card-body-${this.props.reactableId}`} className="reactable-table-holder">
                            <TableHeader />
                            <TableBody />
                        </div>

                        <div style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom: 10 }}>
                            <TableFooter tableWidth={this.props.width} />
                        </div>
                    </Card.Body>

                </Card>

                <CrudModal />
                <ColMenuModal />
                <ContextMenuModal />
            </>
        );
    }


}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): ReactableDispatchProps => {
    return {
        setColModels: (colModels: ColModel[]) => dispatch(ReactableActions.setColModels(colModels)),
        setData: (data: any[]) => dispatch(ReactableActions.setData(data)),
        resizeColumn: (e: MouseEvent) => dispatch(ReactableActions.resizeColumn(e)),
        setColumnToResize: (column: (ColModel | null) = null, e: (any | null) = null) => dispatch(ReactableActions.setColumnToResize(column, e)),
        resetTableoffsetWidth: () => dispatch(ReactableActions.resetTableoffsetWidth()),
    };
}

const mapStateToProps = (state: AppState): ReactableStateProps => {
    return {
        columnToResize: state.reactable.columnToResize,
        reactableId: state.reactable.reactableId,
        width: state.reactable.width,
    } as ReactableStateProps;
}

export default connect<ReactableStateProps, ReactableDispatchProps, ReactableOwnProps, AppState>(mapStateToProps, mapDispatchToProps)(ReactableComponent);

import React, { Component, FormEvent, ChangeEvent } from "react";
import {
    Table,
    Modal,
    Button,
} from "react-bootstrap";
import '../contexMenu.css';
import '../reactable/reactable.css';

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import * as Redux from 'redux'
import { ColModel } from "../../types/ColModel";
import { rootReducer, AppState } from '../../rootReducer'
import { any } from "prop-types";
import { TableHeaderProps, TableHeaderState, initialState, TableHeaderOwnProps, TableHeaderDispatchProps, TableHeaderStateProps } from "./tableHeader.types";
import * as ReactableActions from '../reactable/reactable.actions'


class TableHeaderComponent extends Component<TableHeaderProps, TableHeaderState>{
    constructor(props: TableHeaderProps) {
        super(props);
        this.state = initialState();
    }

    componentDidMount = () => {

    };

    render() {
        return (

            <Table id="x" className="reactable-table" striped bordered hover size="sm"
                style={{
                    width: this.props.tableWidth,

                }}
            >
                <thead style={{
                    alignItems: 'center',
                }}>
                    <tr>
                        {this.props.colModels.map((column) => {
                            return (
                                <th className="reactable-table-colum-header"
                                    key={column.name}
                                    style={{ width: column.width }}
                                    id={column.name}
                                >
                                    <div className="column-header-content-holder" >
                                        <div className="column-header-label"
                                            onClick={() => this.onThClick(column)}
                                        >
                                            {column.orderDirection != "" && column.orderDirection}{" "}{column.label}
                                        </div>
                                        < div className="column-header-menu-holder"
                                            style={{ zIndex: 10 }}
                                        >
                                            <Button
                                                // onClick={() => this.openColMenuModel(column.name)}
                                                size="sm"
                                                className="border-radius-0"
                                                style={{ marginRight: 5, padding: '1px 4px' }}>
                                                <i style={{ padding: 0 }} className="fas fa-sliders-h"></i>
                                            </Button>

                                            <Modal
                                                size="sm"
                                                centered
                                                show={column.showColMenuModal}
                                                // onHide={() => this.closeColMenuModel(column.name)}
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                        {column.name}
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div>width: {column.width}</div>
                                                    <div>freeze</div>
                                                    <div>group</div>
                                                    <div>advanced column filter</div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className="column-header-resize-bar"
                                        onDragStart={e => e.preventDefault()}
                                        onMouseDown={e => this.setColumnToResize(e, column)}
                                    >
                                        &nbsp;
                                                </div>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
            </Table>
        );
    }

    setColumnToResize(e: any, column: ColModel) {

        this.props.setColumnToResize(column, e);
        document.body.style.webkitUserSelect = "none";
        document.body.style.msUserSelect = "none";
        document.body.style.userSelect = "none";
    }

    onThClick = (column: ColModel) => {
        this.props.changeOrderDirection(column);
    };
}



const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.AnyAction>, ownProps: TableHeaderOwnProps): TableHeaderDispatchProps => {
    return {
        setColModels: (colModels: ColModel[]) => dispatch(ReactableActions.setColModels(colModels)),
        resizeColumn: (e: MouseEvent) => dispatch(ReactableActions.resizeColumn(e)),
        setColumnToResize: (column: (ColModel | null) = null, e: (any | null) = null) => dispatch(ReactableActions.setColumnToResize(column, e)),
        resetTableoffsetWidth: () => dispatch(ReactableActions.resetTableoffsetWidth()),
        changeOrderDirection: (column: ColModel) => dispatch(ReactableActions.changeOrderDirection(column))
    };
}

const mapStateToProps = (state: AppState, props: TableHeaderOwnProps): TableHeaderStateProps => {
    return {
        colModels: state.reactable.colModels,
        data: state.reactable.data,
        tableWidth: state.reactable.tableWidth,
        columnToResize: state.reactable.columnToResize,
        reactableId: state.reactable.reactableId,
        width: state.reactable.width
    } as TableHeaderStateProps;
}

export default connect<TableHeaderStateProps, TableHeaderDispatchProps, TableHeaderOwnProps, AppState>(mapStateToProps, mapDispatchToProps)(TableHeaderComponent);

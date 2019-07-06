import React, { Component, FormEvent, ChangeEvent } from "react";
import {
    Table,
    Card,
    Modal,
    Navbar,
    NavDropdown,
    Nav,
    Form,
    FormControl,
    Button,
    Dropdown,
    Col,
    Row,
    InputGroup
} from "react-bootstrap";
import { ContextMenu, ContextMenuTrigger, MenuItem, showMenu } from 'react-contextmenu'
import '../contexMenu.css';
import './reactable.css';

import update from 'immutability-helper'
import TableFooter from "../tableFooter/tableFooter.component"
import cloneDeep from 'lodash/cloneDeep'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import * as Redux from 'redux'
import { ReactableProps, ReactableState, initialState, ReactableStateProps, ReactableDispatchProps, ReactableOwnProps } from "./reactable.types";
import { ColModel } from "../../types/ColModel";
import { rootReducer, AppState } from '../../rootReducer'
import { reactableReducer } from "./reactable.reducer";
import * as ReactableActions from './reactable.actions'
import { any } from "prop-types";
import TableHeader from '../tableHeader/tableHeader.component'
import CrudModal from '../crudModal/crudModal.component'
import { ThunkDispatch } from "redux-thunk";

class ReactableComponent extends Component<ReactableProps, ReactableState>{
    constructor(props: ReactableProps) {
        super(props);
        this.state = initialState();
    }

    setData = (data: any) => {
        data = cloneDeep(data);
        this.setState(
            Object.assign({}, { ...this.state }, { data: data })
        );
    };

    componentDidMount = () => {

        this.props.setColModels(this.props.colModelsProp);
        this.setData(this.props.dataProp);
        this.props.resetTableoffsetWidth();

        let modalState: any = {};
        this.props.colModels.map((colModel: ColModel) => {
            modalState[colModel.name] = "";
        });
        this.setState({ modalState: modalState, emptyModalState: modalState });

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

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.handleWindowSizeChange);
    };

    handleWindowSizeChange = () => {
        this.props.resetTableoffsetWidth();
    };

    onThClick = (column: ColModel) => {
        this.props.changeOrderDirection(column);
    };

    onClickOnRow = (row: any) => {
        this.setState(Object.assign({}, { ...this.state }, { selectedRow: row }));
    };

    render() {
        if (Array.isArray(this.props.colModels) === false)
            throw Error("colModels must be array");

        return (
            <>
                <Card id={`${this.props.reactableId}-reactable`} style={{ minWidth: 360, borderRadius: 0 }}>
                    <Card.Header style={{ padding: 5 }} as="h5" >Featured</Card.Header>
                    <Card.Body id={`reactable-card-body-${this.props.reactableId}`} className="reactable-table-holder">
                        <div style={{
                            overflowX: 'hidden',
                            borderRight: '5px solid rgba(0, 0, 0, 0.05)',
                        }} id='z'>
                            <TableHeader />
                        </div>
                        <div className="reactable-data-table-holder" style={{ overflowX: 'auto', overflowY: 'auto' }} onScroll={(e: any) => this.testScroll(e)}>
                            <Table className="reactable-table reactable-data-table" striped bordered hover size="sm"
                                style={{
                                    width: this.props.tableWidth,
                                    borderBottom: 0
                                    //20 moz
                                    //7 chrome
                                }}>
                                <tbody className="reactable-data-body">
                                    {
                                        this.state.data.map((dataRow, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className={
                                                        dataRow == this.state.selectedRow ? "selectedRow" : ""
                                                    }
                                                    onClick={() => this.onClickOnRow(dataRow)}
                                                    onContextMenu={(e: any) => this.onRightClickOnRow(e, dataRow)}
                                                >

                                                    {
                                                        this.props.colModels.map((colModel, index) => {
                                                            return <td key={index} style={{ width: colModel.width, wordWrap: 'break-word', whiteSpace: 'normal', wordBreak: 'break-all' }}> {dataRow[colModel.name]} </td>;
                                                        })
                                                    }
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </Table >
                        </div>
                    </Card.Body>
                    < Card.Footer >
                        <TableFooter tableWidth={this.props.width} />
                    </Card.Footer>
                </Card>

                {/* < Modal style={{ borderRadius: 0 }}
                    show={this.state.show}
                    onHide={this.handleClose}
                >
                    <Modal.Header style={{ borderRadius: 0 }} closeButton >
                        <Modal.Title>Modal heading </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            this.props.colModels.map((column) => {
                                return (
                                    <div key={column.name} >
                                        <Form.Group
                                            controlId="formBasicEmail"
                                            style={{ marginBottom: 5 }
                                            }
                                        >
                                            <Form.Label style={{ marginBottom: 0 }} >
                                                {column.name}
                                            </Form.Label>
                                            < Form.Control onChange={(e: any) => this.onModalInputChange(column.name, e.target.value)}
                                                type="text"
                                                placeholder={column.name}
                                                value={this.state.modalState[column.name]}
                                            />
                                        </Form.Group>
                                    </div>
                                );
                            })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose} >
                            Close
                        </Button>
                        < Button variant="primary" onClick={this.handleClose} >
                            Save Changes
                </Button>
                    </Modal.Footer>
                </Modal> */}
                {/* {console.log(this.props.colModels)} */}
                <CrudModal/>

                <ContextMenuTrigger id={`context_menu_${this.props.reactableId}`} ref={c => this.contextTrigger = c}>
                    <span></span>
                </ContextMenuTrigger>

                <ContextMenu id={`context_menu_${this.props.reactableId}`}>

                    <MenuItem>
                        <i className="fas fa-edit" /><span style={{ paddingLeft: 10 }}>Edit</span>
                    </MenuItem>
                    <MenuItem>
                        <i className="fas fa-trash-alt" /><span style={{ paddingLeft: 10 }}>Delete</span>
                    </MenuItem>
                    <MenuItem>
                        <i className="fas fa-eye" /> <span style={{ paddingLeft: 10 }}>View</span>
                    </MenuItem>
                </ContextMenu>
            </>
        );
    }

    contextTrigger: any = null;

    onRightClickOnRow = (e: any, row: any) => {
        e.preventDefault();
        this.openContextMenu(e);
        this.onClickOnRow(row);
    }

    openContextMenu = (e: any) => {
        if (this.contextTrigger != null) {
            this.contextTrigger.handleContextClick(e);
        }
    };

    openColMenuModel = (columnName: string) => {
        let colModels = this.props.colModels.map(colModel => {
            if (colModel.name == columnName)
                colModel.showColMenuModal = true;
            return colModel;
        });

        this.setState(Object.assign({}, { ...this.state }, { colModels: colModels }))
    }

    closeColMenuModel = (columnName: string) => {
        let colModels = this.props.colModels.map(colModel => {
            if (colModel.name == columnName)
                colModel.showColMenuModal = false;
            return colModel;
        });

        this.setState(Object.assign({}, { ...this.state }, { colModels: colModels }))
    }

    testScroll = (e: any) => {
        var x = document.getElementById('z');
        x!.scrollLeft = e.target.scrollLeft

        var z = document.getElementsByClassName('react-contextmenu--visible') as HTMLCollectionOf<HTMLElement>;
        if (z.length > 0)
            for (var i = 0; i < z.length; i++) {
                (z.item(i))!.style.opacity = "0";
                (z.item(i))!.style.pointerEvents = "none";
                (z.item(i))!.classList.remove('react-contextmenu--visible');
            }
    }

    onModalInputChange = (name: string, value: any) => {
        let modalState = this.state.modalState;
        modalState[name] = value;
        this.setState({ modalState: modalState });
    };

    openModal = () => {
        this.setState(Object.assign({}, this.state, { show: true }));
    };

    openModalToEdit = () => {
        this.setState(
            Object.assign({}, this.state, {
                show: true,
                modalState: this.state.selectedRow
            })
        );
    };

    handleClose = () => {
        this.setState(
            Object.assign({}, this.state, {
                show: false,
                modalState: this.state.emptyModalState
            })
        );
    };

    setColumnToResize(e: any, column: ColModel) {

        this.props.setColumnToResize(column, e);
        document.body.style.webkitUserSelect = "none";
        document.body.style.msUserSelect = "none";
        document.body.style.userSelect = "none";
    }

    onResizing = () => { };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>,  ownProps: ReactableOwnProps): ReactableDispatchProps => {
    return {
        setColModels: (colModels: ColModel[]) => dispatch(ReactableActions.setColModels(colModels)),
        resizeColumn: (e: MouseEvent) => dispatch(ReactableActions.resizeColumn(e)),
        setColumnToResize: (column: (ColModel | null) = null, e: (any | null) = null) => dispatch(ReactableActions.setColumnToResize(column, e)),
        resetTableoffsetWidth: () => dispatch(ReactableActions.resetTableoffsetWidth()),
        changeOrderDirection: (column: ColModel) => dispatch(ReactableActions.changeOrderDirection(column)),
    };
}

const mapStateToProps = (state: AppState, props: ReactableOwnProps): ReactableStateProps => {
    return {
        colModels: state.reactable.colModels,
        data: state.reactable.data,
        tableWidth: state.reactable.tableWidth,
        columnToResize: state.reactable.columnToResize,
        reactableId: state.reactable.reactableId,
        width: state.reactable.width,
    } as ReactableStateProps;
}

export default connect<ReactableStateProps, ReactableDispatchProps, ReactableOwnProps, AppState>(mapStateToProps, mapDispatchToProps)(ReactableComponent);

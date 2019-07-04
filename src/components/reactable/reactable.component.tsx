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
import Footer from "../footer.component"
import cloneDeep from 'lodash/cloneDeep'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import * as Redux from 'redux'
import { ReactableProps, ReactableState, initialState, ReactableStateProps, ReactableDispatchProps, ReactableOwnProps } from "./reactable.types";
import { ColModel } from "../../types/ColModel";
import {rootReducer, AppState}  from '../../rootReducer'
import { reactableReducer } from "./reactable.reducer";
import * as ReactableActions from './reactable.actions'
import { any } from "prop-types";

class ReactableComponent extends Component<ReactableProps, ReactableState>{
    constructor(props: ReactableProps) {
        super(props);
        this.state = initialState();
    }

    // setColModels = (colModels: any) => {
    //     colModels = cloneDeep(colModels);
    //     let newState: ReactableState = this.state;
    //     newState.colModels = colModels;
    //     let tableWidth: number = 0;
    //     colModels.forEach((colModel: ColModel) => {
    //         tableWidth += colModel.width;
    //         colModel.showColMenuModal = false;
    //     });

    //     newState.tableWidth = tableWidth;
    //     this.setState(
    //         newState
    //     );
    // };

    setData = (data: any) => {
        data = cloneDeep(data);
        this.setState(
            Object.assign({}, { ...this.state }, { data: data })
        );
    };

    componentDidMount = () => {

        // this.setColModels(this.props.colModelsProp);
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

    setInitialTableoffsetWidth=()=>{
        let tableBody = document.getElementById(`${this.props.reactableId}-reactable`)!;
        this.setState({ width: tableBody.offsetWidth });
    }

    componentWillMount = () => {
        window.addEventListener("resize", this.handleWindowSizeChange);
    };

    disableResizingColumnIfInResizeMode = () => {
        if (this.props.columnToResize == null)
            return;

        // this.setState(Object.assign({}, { ...this.state }, { columnToResize: null }));
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

    // resizeColumn = (e: MouseEvent) => {
    //     let colModels = this.props.colModels.map(colModel => {
    //         if (colModel.name == this.props.columnToResize!.name) {
    //             if (this.state.startOffset + e.pageX >= this.props.columnToResize!.minWidth) {
    //                 colModel.width = this.state.startOffset + e.pageX;
    //             }
    //         }
    //         return colModel;
    //     });

    //     let tableWidth = 0;
    //     colModels.forEach(colModel => {
    //         tableWidth += colModel.width;
    //     });
    //     this.setState(update(this.state, { colModels: { $set: colModels }, tableWidth: { $set: tableWidth } }));
    // }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.handleWindowSizeChange);
    };

    handleWindowSizeChange = () => {
        // let tableBody = document.getElementById(`${this.props.reactableId}-reactable`)!;
        // this.setState({ width: tableBody.offsetWidth });
        this.props.resetTableoffsetWidth();
    };

    onThClick = (colName: string) => {
        let sortColumn = { name: colName, order: "" };
        if (this.state.sortColumn && this.state.sortColumn.order === "asc")
            sortColumn.order = "desc";
        else if (this.state.sortColumn && this.state.sortColumn.order === "desc")
            sortColumn.order = "";
        else sortColumn.order = "asc";

        this.setState(Object.assign({}, { ...this.state }, { sortColumn: sortColumn }));
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
                                                                onClick={() => this.onThClick(column.name)}
                                                            >
                                                                {
                                                                    this.state.sortColumn &&
                                                                    this.state.sortColumn.name === column.name &&
                                                                    this.state.sortColumn.order
                                                                }{column.label}
                                                            </div>
                                                            < div className="column-header-menu-holder"
                                                                style={{ zIndex: 10 }}
                                                            >
                                                                <Button
                                                                    onClick={() => this.openColMenuModel(column.name)}
                                                                    size="sm"
                                                                    className="border-radius-0"
                                                                    style={{ marginRight: 5, padding: '1px 4px' }}>
                                                                    <i style={{ padding: 0 }} className="fas fa-sliders-h"></i>
                                                                </Button>

                                                                <Modal
                                                                    size="sm"
                                                                    centered
                                                                    show={column.showColMenuModal}
                                                                    onHide={() => this.closeColMenuModel(column.name)}
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
                            <Footer tableWidth={this.props.width} />
                        </Card.Footer>
                    </Card>

                    < Modal style={{ borderRadius: 0 }}
                        show={this.state.show}
                        onHide={this.handleClose}
                    >
                        <Modal.Header style={{ borderRadius: 0 }} closeButton >
                            <Modal.Title>Modal heading </Modal.Title>
                        </Modal.Header>
                        < Modal.Body >
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
                        < Modal.Footer >
                            <Button variant="secondary" onClick={this.handleClose} >
                                Close
                        </Button>
                            < Button variant="primary" onClick={this.handleClose} >
                                Save Changes
                </Button>
                        </Modal.Footer>
                    </Modal>

                    <ContextMenuTrigger id={`context_menu_${this.props.reactableId}`} ref={c => this.contextTrigger = c}>
                        <span></span>
                    </ContextMenuTrigger>

                    <ContextMenu id={`context_menu_${this.props.reactableId}`}>

                        < MenuItem >
                            <i className="fas fa-edit" /><span style={{ paddingLeft: 10 }}>Edit</span>
                        </MenuItem>
                        < MenuItem>
                            <i className="fas fa-trash-alt" /><span style={{ paddingLeft: 10 }}>Delete</span>
                        </MenuItem>
                        < MenuItem>
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

        this.props.setColumnToResize(column,e);
        document.body.style.webkitUserSelect = "none";
        document.body.style.msUserSelect = "none";
        document.body.style.userSelect = "none";
    }

    onResizing = () => { };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.AnyAction>, ownProps: ReactableOwnProps): ReactableDispatchProps => {
    return {
      setColModels: (colModels: ColModel[]) => dispatch(ReactableActions.setColModels(colModels)),
      resizeColumn:(e: MouseEvent) => dispatch(ReactableActions.resizeColumn(e)),
      setColumnToResize: (column:(ColModel|null)=null,e:(any | null)=null)=>dispatch(ReactableActions.setColumnToResize(column,e)),
      resetTableoffsetWidth:()=>dispatch(ReactableActions.setInitialTableoffsetWidth())
    };
  }

const mapStateToProps=(state:AppState,props:ReactableOwnProps):ReactableStateProps=>{
    return  {
        colModels:state.reactable.colModels,
        data:state.reactable.data,
        tableWidth:state.reactable.tableWidth,
        columnToResize:state.reactable.columnToResize,
        reactableId:state.reactable.reactableId,
        width:state.reactable.width
    } as ReactableStateProps;
}

export default connect<ReactableStateProps, ReactableDispatchProps, ReactableOwnProps,AppState>(mapStateToProps,mapDispatchToProps)(ReactableComponent);

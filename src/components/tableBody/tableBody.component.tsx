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
import { TableBodyProps, TableBodyState, initialState, TableBodyOwnProps, TableBodyDispatchProps, TableBodyStateProps } from "./tableBody.types";
import * as ReactableActions from '../reactable/reactable.actions'
import * as ColMenuModelActions from '../colMenuModal/colMenuModal.actions'
import { ThunkDispatch } from "redux-thunk";

class TableBodyComponent extends Component<TableBodyProps, TableBodyState>{
    constructor(props: TableBodyProps) {
        super(props);
        this.state = initialState();
    }

    onClickOnRow = (row: any) => {
        this.props.selectRow(row);
    };

    onRightClickOnRow = (e: any, row: any) => {
        e.preventDefault();
        this.openContextMenu(e);
        this.onClickOnRow(row);
    }

    openContextMenu = (e: any) => {
        if (this.props.contextTrigger != null) {
            this.props.contextTrigger.handleContextClick(e);
        }
    };

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

    render() {
        return (
            <div id='q' className="reactable-data-table-holder" style={{ overflowX: 'auto', overflowY: 'auto' }} onScroll={(e: any) => this.testScroll(e)}>
                <Table className="reactable-table reactable-data-table" striped bordered hover size="sm"
                    style={{
                        width: this.props.tableWidth,
                        borderBottom: 0,
                        height:'100%'
                        //20 moz
                        //7 chrome
                    }}>
                    <tbody className="reactable-data-body">
                        {
                            this.props.data.map((dataRow, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className={
                                            dataRow == this.props.selectedRow ? "selectedRow" : ""
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
        );
    }
}



const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: TableBodyOwnProps): TableBodyDispatchProps => {
    return {
        selectRow:(row:any)=>dispatch(ReactableActions.selectRow(row))
    };
}

const mapStateToProps = (state: AppState, props: TableBodyOwnProps): TableBodyStateProps => {
    return {
        colModels: state.reactable.colModels,
        data: state.reactable.data,
        tableWidth: state.reactable.tableWidth,
        columnToResize: state.reactable.columnToResize,
        reactableId: state.reactable.reactableId,
        width: state.reactable.width,
        selectedRow:state.reactable.selectedRow,
        contextTrigger:state.contextMenuModal.contextMenuTrigger
    } as TableBodyStateProps;
}

export default connect<TableBodyStateProps, TableBodyDispatchProps, TableBodyOwnProps, AppState>(mapStateToProps, mapDispatchToProps)(TableBodyComponent);

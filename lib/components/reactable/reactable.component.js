var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from "react";
import { Table, Card, Modal, Form, Button } from "react-bootstrap";
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu';
import '../contexMenu.css';
import './reactable.css';
import Footer from "../footer.component";
import cloneDeep from 'lodash/cloneDeep';
import { connect } from 'react-redux';
import { initialState } from "./reactable.types";
import * as ReactableActions from './reactable.actions';
var ReactableComponent = /** @class */ (function (_super) {
    __extends(ReactableComponent, _super);
    function ReactableComponent(props) {
        var _this = _super.call(this, props) || this;
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
        _this.setData = function (data) {
            data = cloneDeep(data);
            _this.setState(Object.assign({}, __assign({}, _this.state), { data: data }));
        };
        _this.componentDidMount = function () {
            // this.setColModels(this.props.colModelsProp);
            _this.props.setColModels(_this.props.colModelsProp);
            _this.setData(_this.props.dataProp);
            _this.props.resetTableoffsetWidth();
            var modalState = {};
            _this.props.colModels.map(function (colModel) {
                modalState[colModel.name] = "";
            });
            _this.setState({ modalState: modalState, emptyModalState: modalState });
            document.getElementById(_this.props.reactableId + "-reactable").addEventListener("mouseup", function () {
                _this.disableResizingColumnIfInResizeMode();
            });
            document.getElementById(_this.props.reactableId + "-reactable").addEventListener("mousemove", function (e) {
                _this.resizeColumnIfInResizeMode(e);
            });
        };
        _this.setInitialTableoffsetWidth = function () {
            var tableBody = document.getElementById(_this.props.reactableId + "-reactable");
            _this.setState({ width: tableBody.offsetWidth });
        };
        _this.componentWillMount = function () {
            window.addEventListener("resize", _this.handleWindowSizeChange);
        };
        _this.disableResizingColumnIfInResizeMode = function () {
            if (_this.props.columnToResize == null)
                return;
            // this.setState(Object.assign({}, { ...this.state }, { columnToResize: null }));
            _this.props.setColumnToResize();
            _this.enableTextSelectionOnPage();
        };
        _this.resizeColumnIfInResizeMode = function (e) {
            if (_this.props.columnToResize != null) {
                _this.props.resizeColumn(e);
            }
        };
        _this.enableTextSelectionOnPage = function () {
            document.body.style.webkitUserSelect = "";
            document.body.style.msUserSelect = "";
            document.body.style.userSelect = "";
        };
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
        _this.componentWillUnmount = function () {
            window.removeEventListener("resize", _this.handleWindowSizeChange);
        };
        _this.handleWindowSizeChange = function () {
            // let tableBody = document.getElementById(`${this.props.reactableId}-reactable`)!;
            // this.setState({ width: tableBody.offsetWidth });
            _this.props.resetTableoffsetWidth();
        };
        _this.onThClick = function (colName) {
            var sortColumn = { name: colName, order: "" };
            if (_this.state.sortColumn && _this.state.sortColumn.order === "asc")
                sortColumn.order = "desc";
            else if (_this.state.sortColumn && _this.state.sortColumn.order === "desc")
                sortColumn.order = "";
            else
                sortColumn.order = "asc";
            _this.setState(Object.assign({}, __assign({}, _this.state), { sortColumn: sortColumn }));
        };
        _this.onClickOnRow = function (row) {
            _this.setState(Object.assign({}, __assign({}, _this.state), { selectedRow: row }));
        };
        _this.contextTrigger = null;
        _this.onRightClickOnRow = function (e, row) {
            e.preventDefault();
            _this.openContextMenu(e);
            _this.onClickOnRow(row);
        };
        _this.openContextMenu = function (e) {
            if (_this.contextTrigger != null) {
                _this.contextTrigger.handleContextClick(e);
            }
        };
        _this.openColMenuModel = function (columnName) {
            var colModels = _this.props.colModels.map(function (colModel) {
                if (colModel.name == columnName)
                    colModel.showColMenuModal = true;
                return colModel;
            });
            _this.setState(Object.assign({}, __assign({}, _this.state), { colModels: colModels }));
        };
        _this.closeColMenuModel = function (columnName) {
            var colModels = _this.props.colModels.map(function (colModel) {
                if (colModel.name == columnName)
                    colModel.showColMenuModal = false;
                return colModel;
            });
            _this.setState(Object.assign({}, __assign({}, _this.state), { colModels: colModels }));
        };
        _this.testScroll = function (e) {
            var x = document.getElementById('z');
            x.scrollLeft = e.target.scrollLeft;
            var z = document.getElementsByClassName('react-contextmenu--visible');
            if (z.length > 0)
                for (var i = 0; i < z.length; i++) {
                    (z.item(i)).style.opacity = "0";
                    (z.item(i)).style.pointerEvents = "none";
                    (z.item(i)).classList.remove('react-contextmenu--visible');
                }
        };
        _this.onModalInputChange = function (name, value) {
            var modalState = _this.state.modalState;
            modalState[name] = value;
            _this.setState({ modalState: modalState });
        };
        _this.openModal = function () {
            _this.setState(Object.assign({}, _this.state, { show: true }));
        };
        _this.openModalToEdit = function () {
            _this.setState(Object.assign({}, _this.state, {
                show: true,
                modalState: _this.state.selectedRow
            }));
        };
        _this.handleClose = function () {
            _this.setState(Object.assign({}, _this.state, {
                show: false,
                modalState: _this.state.emptyModalState
            }));
        };
        _this.onResizing = function () { };
        _this.state = initialState();
        return _this;
    }
    ReactableComponent.prototype.render = function () {
        var _this = this;
        if (Array.isArray(this.props.colModels) === false)
            throw Error("colModels must be array");
        return (React.createElement(React.Fragment, null,
            React.createElement(Card, { id: this.props.reactableId + "-reactable", style: { minWidth: 360, borderRadius: 0 } },
                React.createElement(Card.Header, { style: { padding: 5 }, as: "h5" }, "Featured"),
                React.createElement(Card.Body, { id: "reactable-card-body-" + this.props.reactableId, className: "reactable-table-holder" },
                    React.createElement("div", { style: {
                            overflowX: 'hidden',
                            borderRight: '5px solid rgba(0, 0, 0, 0.05)',
                        }, id: 'z' },
                        React.createElement(Table, { id: "x", className: "reactable-table", striped: true, bordered: true, hover: true, size: "sm", style: {
                                width: this.props.tableWidth,
                            } },
                            React.createElement("thead", { style: {
                                    alignItems: 'center',
                                } },
                                React.createElement("tr", null, this.props.colModels.map(function (column) {
                                    return (React.createElement("th", { className: "reactable-table-colum-header", key: column.name, style: { width: column.width }, id: column.name },
                                        React.createElement("div", { className: "column-header-content-holder" },
                                            React.createElement("div", { className: "column-header-label", onClick: function () { return _this.onThClick(column.name); } },
                                                _this.state.sortColumn &&
                                                    _this.state.sortColumn.name === column.name &&
                                                    _this.state.sortColumn.order,
                                                column.label),
                                            React.createElement("div", { className: "column-header-menu-holder", style: { zIndex: 10 } },
                                                React.createElement(Button, { onClick: function () { return _this.openColMenuModel(column.name); }, size: "sm", className: "border-radius-0", style: { marginRight: 5, padding: '1px 4px' } },
                                                    React.createElement("i", { style: { padding: 0 }, className: "fas fa-sliders-h" })),
                                                React.createElement(Modal, { size: "sm", centered: true, show: column.showColMenuModal, onHide: function () { return _this.closeColMenuModel(column.name); } },
                                                    React.createElement(Modal.Header, { closeButton: true },
                                                        React.createElement(Modal.Title, { id: "contained-modal-title-vcenter" }, column.name)),
                                                    React.createElement(Modal.Body, null,
                                                        React.createElement("div", null,
                                                            "width: ",
                                                            column.width),
                                                        React.createElement("div", null, "freeze"),
                                                        React.createElement("div", null, "group"),
                                                        React.createElement("div", null, "advanced column filter"))))),
                                        React.createElement("div", { className: "column-header-resize-bar", onDragStart: function (e) { return e.preventDefault(); }, onMouseDown: function (e) { return _this.setColumnToResize(e, column); } }, "\u00A0")));
                                }))))),
                    React.createElement("div", { className: "reactable-data-table-holder", style: { overflowX: 'auto', overflowY: 'auto' }, onScroll: function (e) { return _this.testScroll(e); } },
                        React.createElement(Table, { className: "reactable-table reactable-data-table", striped: true, bordered: true, hover: true, size: "sm", style: {
                                width: this.props.tableWidth,
                                borderBottom: 0
                                //20 moz
                                //7 chrome
                            } },
                            React.createElement("tbody", { className: "reactable-data-body" }, this.state.data.map(function (dataRow, index) {
                                return (React.createElement("tr", { key: index, className: dataRow == _this.state.selectedRow ? "selectedRow" : "", onClick: function () { return _this.onClickOnRow(dataRow); }, onContextMenu: function (e) { return _this.onRightClickOnRow(e, dataRow); } }, _this.props.colModels.map(function (colModel, index) {
                                    return React.createElement("td", { key: index, style: { width: colModel.width, wordWrap: 'break-word', whiteSpace: 'normal', wordBreak: 'break-all' } },
                                        " ",
                                        dataRow[colModel.name],
                                        " ");
                                })));
                            }))))),
                React.createElement(Card.Footer, null,
                    React.createElement(Footer, { tableWidth: this.props.width }))),
            React.createElement(Modal, { style: { borderRadius: 0 }, show: this.state.show, onHide: this.handleClose },
                React.createElement(Modal.Header, { style: { borderRadius: 0 }, closeButton: true },
                    React.createElement(Modal.Title, null, "Modal heading ")),
                React.createElement(Modal.Body, null, this.props.colModels.map(function (column) {
                    return (React.createElement("div", { key: column.name },
                        React.createElement(Form.Group, { controlId: "formBasicEmail", style: { marginBottom: 5 } },
                            React.createElement(Form.Label, { style: { marginBottom: 0 } }, column.name),
                            React.createElement(Form.Control, { onChange: function (e) { return _this.onModalInputChange(column.name, e.target.value); }, type: "text", placeholder: column.name, value: _this.state.modalState[column.name] }))));
                })),
                React.createElement(Modal.Footer, null,
                    React.createElement(Button, { variant: "secondary", onClick: this.handleClose }, "Close"),
                    React.createElement(Button, { variant: "primary", onClick: this.handleClose }, "Save Changes"))),
            React.createElement(ContextMenuTrigger, { id: "context_menu_" + this.props.reactableId, ref: function (c) { return _this.contextTrigger = c; } },
                React.createElement("span", null)),
            React.createElement(ContextMenu, { id: "context_menu_" + this.props.reactableId },
                React.createElement(MenuItem, null,
                    React.createElement("i", { className: "fas fa-edit" }),
                    React.createElement("span", { style: { paddingLeft: 10 } }, "Edit")),
                React.createElement(MenuItem, null,
                    React.createElement("i", { className: "fas fa-trash-alt" }),
                    React.createElement("span", { style: { paddingLeft: 10 } }, "Delete")),
                React.createElement(MenuItem, null,
                    React.createElement("i", { className: "fas fa-eye" }),
                    " ",
                    React.createElement("span", { style: { paddingLeft: 10 } }, "View")))));
    };
    ReactableComponent.prototype.setColumnToResize = function (e, column) {
        this.props.setColumnToResize(column, e);
        document.body.style.webkitUserSelect = "none";
        document.body.style.msUserSelect = "none";
        document.body.style.userSelect = "none";
    };
    return ReactableComponent;
}(Component));
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        setColModels: function (colModels) { return dispatch(ReactableActions.setColModels(colModels)); },
        resizeColumn: function (e) { return dispatch(ReactableActions.resizeColumn(e)); },
        setColumnToResize: function (column, e) {
            if (column === void 0) { column = null; }
            if (e === void 0) { e = null; }
            return dispatch(ReactableActions.setColumnToResize(column, e));
        },
        resetTableoffsetWidth: function () { return dispatch(ReactableActions.setInitialTableoffsetWidth()); }
    };
};
var mapStateToProps = function (state, props) {
    return {
        colModels: state.reactable.colModels,
        data: state.reactable.data,
        tableWidth: state.reactable.tableWidth,
        columnToResize: state.reactable.columnToResize,
        reactableId: state.reactable.reactableId,
        width: state.reactable.width
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReactableComponent);
//# sourceMappingURL=reactable.component.js.map
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
import React, { Component } from "react";
import { Table, Modal, Button, } from "react-bootstrap";
import '../contexMenu.css';
import '../reactable/reactable.css';
import { connect } from 'react-redux';
import { initialState } from "./tableHeader.types";
import * as ReactableActions from '../reactable/reactable.actions';
var TableHeaderComponent = /** @class */ (function (_super) {
    __extends(TableHeaderComponent, _super);
    function TableHeaderComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
        };
        _this.onThClick = function (column) {
            _this.props.changeOrderDirection(column);
        };
        _this.state = initialState();
        return _this;
    }
    TableHeaderComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement(Table, { id: "x", className: "reactable-table", striped: true, bordered: true, hover: true, size: "sm", style: {
                width: this.props.tableWidth,
            } },
            React.createElement("thead", { style: {
                    alignItems: 'center',
                } },
                React.createElement("tr", null, this.props.colModels.map(function (column) {
                    return (React.createElement("th", { className: "reactable-table-colum-header", key: column.name, style: { width: column.width }, id: column.name },
                        React.createElement("div", { className: "column-header-content-holder" },
                            React.createElement("div", { className: "column-header-label", onClick: function () { return _this.onThClick(column); } },
                                column.orderDirection != "" && column.orderDirection,
                                " ",
                                column.label),
                            React.createElement("div", { className: "column-header-menu-holder", style: { zIndex: 10 } },
                                React.createElement(Button
                                // onClick={() => this.openColMenuModel(column.name)}
                                , { 
                                    // onClick={() => this.openColMenuModel(column.name)}
                                    size: "sm", className: "border-radius-0", style: { marginRight: 5, padding: '1px 4px' } },
                                    React.createElement("i", { style: { padding: 0 }, className: "fas fa-sliders-h" })),
                                React.createElement(Modal, { size: "sm", centered: true, show: column.showColMenuModal },
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
                })))));
    };
    TableHeaderComponent.prototype.setColumnToResize = function (e, column) {
        this.props.setColumnToResize(column, e);
        document.body.style.webkitUserSelect = "none";
        document.body.style.msUserSelect = "none";
        document.body.style.userSelect = "none";
    };
    return TableHeaderComponent;
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
        resetTableoffsetWidth: function () { return dispatch(ReactableActions.resetTableoffsetWidth()); },
        changeOrderDirection: function (column) { return dispatch(ReactableActions.changeOrderDirection(column)); }
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
export default connect(mapStateToProps, mapDispatchToProps)(TableHeaderComponent);
//# sourceMappingURL=tableHeader.component.js.map
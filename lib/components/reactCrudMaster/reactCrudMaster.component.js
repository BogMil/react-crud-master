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
import { Card } from "react-bootstrap";
import '../contexMenu.css';
import './reactCrudMaster.css';
import TableFooter from "../tableFooter/tableFooter.component";
import { connect } from 'react-redux';
import { initialState } from "./reactCrudMaster.types";
import * as ReactCrudMasterActions from './reactCrudMaster.actions';
import TableHeader from '../tableHeader/tableHeader.component';
import TableBody from '../tableBody/tableBody.component';
import CrudModal from '../crudModal/crudModal.component';
import ColMenuModal from '../colMenuModal/colMenuModal.component';
import ContextMenuModal from '../contextMenuModal/contextMenuModal.component';
var ReactCrudMasterComponent = /** @class */ (function (_super) {
    __extends(ReactCrudMasterComponent, _super);
    function ReactCrudMasterComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            _this.props.setColModels(_this.props.colModelsProp);
            _this.props.setData(_this.props.dataProp);
            _this.props.resetTableoffsetWidth();
            if (_this.props.tableTitle != null)
                _this.props.setTableTitle(_this.props.tableTitle);
            document.getElementById("CMID-" + _this.props.RCMID).addEventListener("mouseup", function () {
                _this.disableResizingColumnIfInResizeMode();
            });
            document.getElementById("CMID-" + _this.props.RCMID).addEventListener("mousemove", function (e) {
                _this.resizeColumnIfInResizeMode(e);
            });
        };
        _this.componentWillMount = function () {
            window.addEventListener("resize", _this.handleWindowSizeChange);
        };
        _this.componentWillUnmount = function () {
            window.removeEventListener("resize", _this.handleWindowSizeChange);
        };
        _this.handleWindowSizeChange = function () {
            _this.props.resetTableoffsetWidth();
        };
        _this.disableResizingColumnIfInResizeMode = function () {
            if (_this.props.columnToResize == null)
                return;
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
        _this.state = initialState();
        return _this;
    }
    ReactCrudMasterComponent.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Card, { id: "CMID-" + this.props.RCMID, style: { minWidth: 360, borderRadius: 0 } },
                React.createElement(Card.Header, { className: 'cm-table-header', "data-testid": 'cm-table-header', style: { padding: 5 }, as: "h5" }, this.props.tableTitleProp),
                React.createElement(Card.Body, { style: { padding: 0 } },
                    React.createElement("div", { id: "reactable-card-body-" + this.props.RCMID, className: "reactable-table-holder" },
                        React.createElement(TableHeader, null),
                        React.createElement(TableBody, null)),
                    React.createElement("div", { style: { paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom: 10 } },
                        React.createElement(TableFooter, { tableWidth: this.props.width })))),
            React.createElement(CrudModal, null),
            React.createElement(ColMenuModal, null),
            React.createElement(ContextMenuModal, null)));
    };
    return ReactCrudMasterComponent;
}(Component));
var mapDispatchToProps = function (dispatch) {
    return {
        setColModels: function (colModels) { return dispatch(ReactCrudMasterActions.setColModels(colModels)); },
        setData: function (data) { return dispatch(ReactCrudMasterActions.setData(data)); },
        resizeColumn: function (e) { return dispatch(ReactCrudMasterActions.resizeColumn(e)); },
        setColumnToResize: function (column, e) {
            if (column === void 0) { column = null; }
            if (e === void 0) { e = null; }
            return dispatch(ReactCrudMasterActions.setColumnToResize(column, e));
        },
        resetTableoffsetWidth: function () { return dispatch(ReactCrudMasterActions.resetTableoffsetWidth()); },
        setTableTitle: function (tableTitle) { return dispatch(ReactCrudMasterActions.setTableTitle(tableTitle)); },
    };
};
var mapStateToProps = function (state) {
    return {
        columnToResize: state.reactCrudMaster.columnToResize,
        RCMID: state.reactCrudMaster.RCMID,
        width: state.reactCrudMaster.width,
        tableTitleProp: state.reactCrudMaster.tableTitleProp
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReactCrudMasterComponent);
//# sourceMappingURL=reactCrudMaster.component.js.map
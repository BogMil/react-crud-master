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
import './reactable.css';
import TableFooter from "../tableFooter/tableFooter.component";
import { connect } from 'react-redux';
import { initialState } from "./reactable.types";
import * as ReactableActions from './reactable.actions';
import TableHeader from '../tableHeader/tableHeader.component';
import TableBody from '../tableBody/tableBody.component';
import CrudModal from '../crudModal/crudModal.component';
import ColMenuModal from '../colMenuModal/colMenuModal.component';
import ContextMenuModal from '../contextMenuModal/contextMenuModal.component';
var ReactableComponent = /** @class */ (function (_super) {
    __extends(ReactableComponent, _super);
    function ReactableComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            _this.props.setColModels(_this.props.colModelsProp);
            _this.props.setData(_this.props.dataProp);
            _this.props.resetTableoffsetWidth();
            document.getElementById(_this.props.reactableId + "-reactable").addEventListener("mouseup", function () {
                _this.disableResizingColumnIfInResizeMode();
            });
            document.getElementById(_this.props.reactableId + "-reactable").addEventListener("mousemove", function (e) {
                _this.resizeColumnIfInResizeMode(e);
            });
        };
        _this.componentWillMount = function () {
            window.addEventListener("resize", _this.handleWindowSizeChange);
        };
        _this.componentWillUnmount = function () {
            window.removeEventListener("resize", _this.handleWindowSizeChange);
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
        _this.handleWindowSizeChange = function () {
            _this.props.resetTableoffsetWidth();
        };
        _this.state = initialState();
        return _this;
    }
    ReactableComponent.prototype.render = function () {
        // if (Array.isArray(this.props.colModels) === false)
        //     throw Error("colModels must be array");
        return (React.createElement(React.Fragment, null,
            React.createElement(Card, { id: this.props.reactableId + "-reactable", style: { minWidth: 360, borderRadius: 0 } },
                React.createElement(Card.Header, { style: { padding: 5 }, as: "h5" }, "Featured"),
                React.createElement(Card.Body, { id: "reactable-card-body-" + this.props.reactableId, className: "reactable-table-holder" },
                    React.createElement(TableHeader, null),
                    React.createElement(TableBody, null)),
                React.createElement(Card.Footer, null,
                    React.createElement(TableFooter, { tableWidth: this.props.width }))),
            React.createElement(CrudModal, null),
            React.createElement(ColMenuModal, null),
            React.createElement(ContextMenuModal, null)));
    };
    return ReactableComponent;
}(Component));
var mapDispatchToProps = function (dispatch) {
    return {
        setColModels: function (colModels) { return dispatch(ReactableActions.setColModels(colModels)); },
        setData: function (data) { return dispatch(ReactableActions.setData(data)); },
        resizeColumn: function (e) { return dispatch(ReactableActions.resizeColumn(e)); },
        setColumnToResize: function (column, e) {
            if (column === void 0) { column = null; }
            if (e === void 0) { e = null; }
            return dispatch(ReactableActions.setColumnToResize(column, e));
        },
        resetTableoffsetWidth: function () { return dispatch(ReactableActions.resetTableoffsetWidth()); },
    };
};
var mapStateToProps = function (state) {
    return {
        columnToResize: state.reactable.columnToResize,
        reactableId: state.reactable.reactableId,
        width: state.reactable.width,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReactableComponent);
//# sourceMappingURL=reactable.component.js.map
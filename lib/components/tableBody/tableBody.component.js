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
import { Table, } from "react-bootstrap";
import '../contexMenu.css';
import '../reactable/reactable.css';
import { connect } from 'react-redux';
import { initialState } from "./tableBody.types";
import * as ReactableActions from '../reactable/reactable.actions';
var TableBodyComponent = /** @class */ (function (_super) {
    __extends(TableBodyComponent, _super);
    function TableBodyComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onClickOnRow = function (row) {
            _this.props.selectRow(row);
        };
        _this.onRightClickOnRow = function (e, row) {
            e.preventDefault();
            _this.openContextMenu(e);
            _this.onClickOnRow(row);
        };
        _this.openContextMenu = function (e) {
            if (_this.props.contextTrigger != null) {
                _this.props.contextTrigger.handleContextClick(e);
            }
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
        _this.state = initialState();
        return _this;
    }
    TableBodyComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: 'q', className: "reactable-data-table-holder", style: { overflowX: 'auto', overflowY: 'auto' }, onScroll: function (e) { return _this.testScroll(e); } },
            React.createElement(Table, { className: "reactable-table reactable-data-table", striped: true, bordered: true, hover: true, size: "sm", style: {
                    width: this.props.tableWidth,
                    borderBottom: 0,
                    height: '100%'
                    //20 moz
                    //7 chrome
                } },
                React.createElement("tbody", { className: "reactable-data-body" }, this.props.data.map(function (dataRow, index) {
                    return (React.createElement("tr", { key: index, className: dataRow == _this.props.selectedRow ? "selectedRow" : "", onClick: function () { return _this.onClickOnRow(dataRow); }, onContextMenu: function (e) { return _this.onRightClickOnRow(e, dataRow); } }, _this.props.colModels.map(function (colModel, index) {
                        return React.createElement("td", { key: index, style: { width: colModel.width, wordWrap: 'break-word', whiteSpace: 'normal', wordBreak: 'break-all' } },
                            " ",
                            dataRow[colModel.name],
                            " ");
                    })));
                })))));
    };
    return TableBodyComponent;
}(Component));
var mapDispatchToProps = function (dispatch) {
    return {
        selectRow: function (row) { return dispatch(ReactableActions.selectRow(row)); }
    };
};
var mapStateToProps = function (state) {
    return {
        colModels: state.reactable.colModels,
        data: state.reactable.data,
        tableWidth: state.reactable.tableWidth,
        columnToResize: state.reactable.columnToResize,
        reactableId: state.reactable.reactableId,
        width: state.reactable.width,
        selectedRow: state.reactable.selectedRow,
        contextTrigger: state.contextMenuModal.contextMenuTrigger
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableBodyComponent);
//# sourceMappingURL=tableBody.component.js.map
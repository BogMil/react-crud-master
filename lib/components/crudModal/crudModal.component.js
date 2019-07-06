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
import { Modal, Button, Form, } from "react-bootstrap";
import '../contexMenu.css';
import '../reactable/reactable.css';
import { connect } from 'react-redux';
import * as CrudModalActions from '../crudModal/crudModal.actions';
import { initialState } from "./CrudModal.types";
var CrudModalComponent = /** @class */ (function (_super) {
    __extends(CrudModalComponent, _super);
    function CrudModalComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
        };
        _this.handleClose = function () {
            _this.props.closeCrudModal();
        };
        _this.onRowDataChange = function (name, value) {
            _this.props.onRowDataChange(name, value);
        };
        _this.state = initialState();
        return _this;
    }
    CrudModalComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement(Modal, { style: { borderRadius: 0 }, show: this.props.show, onHide: this.handleClose, centered: true },
            React.createElement(Modal.Header, { style: { borderRadius: 0 }, closeButton: true },
                React.createElement(Modal.Title, null, "Modal heading ")),
            React.createElement(Modal.Body, null, this.props.colModels.map(function (column) {
                return (React.createElement("div", { key: column.name },
                    React.createElement(Form.Group, { controlId: "formBasicEmail", style: { marginBottom: 5 } },
                        React.createElement(Form.Label, { style: { marginBottom: 0 } }, column.name),
                        React.createElement(Form.Control, { onChange: function (e) { return _this.onRowDataChange(column.name, e.target.value); }, type: "text", placeholder: column.name, value: _this.props.rowData[column.name] }))));
            })),
            React.createElement(Modal.Footer, null,
                React.createElement(Button, { variant: "secondary", onClick: this.handleClose }, "Close"),
                React.createElement(Button, { variant: "primary", onClick: this.handleClose }, "Save Changes"))));
    };
    return CrudModalComponent;
}(Component));
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        closeCrudModal: function () { return dispatch(CrudModalActions.closeModal()); },
        onRowDataChange: function (name, value) { return dispatch(CrudModalActions.onRowDataChange(name, value)); }
    };
};
var mapStateToProps = function (state, props) {
    return {
        show: state.crudModal.show,
        colModels: state.reactable.colModels,
        rowData: state.crudModal.rowData
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CrudModalComponent);
//# sourceMappingURL=crudModal.component.js.map
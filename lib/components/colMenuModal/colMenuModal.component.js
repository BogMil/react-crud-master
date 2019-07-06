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
import { Modal, } from "react-bootstrap";
import '../contexMenu.css';
import '../reactable/reactable.css';
import { connect } from 'react-redux';
import { initialState } from "./ColMenuModal.types";
import * as ColMenuModalActions from './colMenuModal.actions';
var ColMenuModalComponent = /** @class */ (function (_super) {
    __extends(ColMenuModalComponent, _super);
    function ColMenuModalComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
        };
        _this.state = initialState();
        return _this;
    }
    ColMenuModalComponent.prototype.render = function () {
        return (React.createElement(Modal, { size: "sm", centered: true, show: this.props.show, onHide: this.props.closeColMenuModel },
            React.createElement(Modal.Header, { closeButton: true },
                React.createElement(Modal.Title, { id: "contained-modal-title-vcenter" }, this.props.colModel && this.props.colModel.name)),
            React.createElement(Modal.Body, null,
                React.createElement("div", null,
                    "width: ",
                    this.props.colModel && this.props.colModel.width),
                React.createElement("div", null, "freeze"),
                React.createElement("div", null, "group"),
                React.createElement("div", null, "advanced column filter"))));
    };
    return ColMenuModalComponent;
}(Component));
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        closeColMenuModel: function () { return dispatch(ColMenuModalActions.closeModal()); }
    };
};
var mapStateToProps = function (state, props) {
    return {
        colModel: state.colMenuModal.colModel,
        show: state.colMenuModal.show
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ColMenuModalComponent);
//# sourceMappingURL=colMenuModal.component.js.map
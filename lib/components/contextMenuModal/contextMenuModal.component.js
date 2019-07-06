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
import '../contexMenu.css';
import '../reactable/reactable.css';
import { connect } from 'react-redux';
import * as ContextMenuActions from './contextMenuModal.actions';
import { ContextMenuTrigger, ContextMenu, MenuItem } from "react-contextmenu";
var ContextMenuModalComponent = /** @class */ (function (_super) {
    __extends(ContextMenuModalComponent, _super);
    function ContextMenuModalComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextMenuModalComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(ContextMenuTrigger, { id: "context_menu_" + this.props.reactableId, ref: function (c) { return _this.props.setContextMenuTriggerRef(c); } },
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
    return ContextMenuModalComponent;
}(Component));
var mapDispatchToProps = function (dispatch) {
    return {
        setContextMenuTriggerRef: function (c) { return dispatch(ContextMenuActions.setContextMenuTriggerRef(c)); },
    };
};
var mapStateToProps = function (state) {
    return {
        contextMenuTrigger: state.contextMenuModal.contextMenuTrigger,
        reactableId: state.reactable.reactableId
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContextMenuModalComponent);
//# sourceMappingURL=contextMenuModal.component.js.map
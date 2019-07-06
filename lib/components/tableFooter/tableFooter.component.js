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
import { Form, Button, Dropdown, Col, Row, InputGroup } from "react-bootstrap";
import '../reactable/reactable.css';
import { connect } from "react-redux";
import * as CurdModalActions from '../crudModal/crudModal.actions';
var TableFooterComponent = /** @class */ (function (_super) {
    __extends(TableFooterComponent, _super);
    function TableFooterComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.render = function () {
            var buttonStyle = { borderRadius: 0, margin: 1 };
            if (_this.props.tableWidth < 620)
                return (React.createElement(Row, null,
                    React.createElement(Col, { xs: 2 },
                        React.createElement(Dropdown, { style: { textAlign: "left" } },
                            React.createElement(Dropdown.Toggle, { size: "sm", style: __assign({}, buttonStyle), variant: "primary", id: "dropdown-basic" },
                                React.createElement("i", { className: "fas fa-bars" })),
                            React.createElement(Dropdown.Menu, null,
                                React.createElement(Dropdown.Item, { href: "#/action-1", onClick: function () { return _this.props.openCrudModal(); } },
                                    React.createElement("i", { className: "fas fa-plus" }),
                                    React.createElement("span", { style: { paddingLeft: 10 } }, "Add")),
                                React.createElement(Dropdown.Item, { href: "#/action-2" },
                                    React.createElement("i", { className: "fas fa-edit" }),
                                    React.createElement("span", { style: { paddingLeft: 10 } }, "Edit")),
                                React.createElement(Dropdown.Item, { href: "#/action-2" },
                                    React.createElement("i", { className: "fas fa-trash-alt" }),
                                    React.createElement("span", { style: { paddingLeft: 10 } }, "Delete")),
                                React.createElement(Dropdown.Item, { href: "#/action-2" },
                                    React.createElement("i", { className: "fas fa-eye" }),
                                    " ",
                                    React.createElement("span", { style: { paddingLeft: 10 } }, "View")),
                                React.createElement(Dropdown.Item, { href: "#/action-2" },
                                    React.createElement("i", { className: "fas fa-search" }),
                                    " ",
                                    React.createElement("span", { style: { paddingLeft: 10 } }, "Search"))))),
                    React.createElement(Col, { xs: 6 },
                        React.createElement(InputGroup, { className: "", style: { textAlign: "center", alignItems: 'center', justifyContent: 'center' } },
                            React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                                React.createElement("i", { className: "fas fa-angle-left" })),
                            React.createElement("div", { style: { display: 'inline-block' } },
                                React.createElement(Form.Control, { className: "border-radius-0", style: { height: 31, margin: 1, padding: 2, width: 50 }, defaultValue: "asd" })),
                            React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                                React.createElement("i", { className: "fas fa-angle-right" })))),
                    React.createElement(Col, { xs: 4 }, " 102 - 103 / 123 ")));
            return (React.createElement(Row, null,
                React.createElement(Col, { xs: 4, style: { textAlign: "left" } },
                    React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle), onClick: function () { return _this.props.openCrudModal(); } },
                        React.createElement("i", { className: "fas fa-plus" })),
                    React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                        React.createElement("i", { className: "far fa-edit" })),
                    React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                        React.createElement("i", { className: "fas fa-trash-alt" })),
                    React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                        React.createElement("i", { className: "fas fa-eye" })),
                    React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                        React.createElement("i", { className: "fas fa-search" }))),
                React.createElement(Col, { xs: 4 },
                    React.createElement(InputGroup, { className: "", style: { textAlign: "center", alignItems: 'center', justifyContent: 'center' } },
                        React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                            React.createElement("i", { className: "fas fa-angle-double-left" })),
                        React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                            React.createElement("i", { className: "fas fa-angle-left" })),
                        React.createElement("div", { style: { display: 'inline-block' } },
                            React.createElement(Form.Control, { className: "border-radius-0", style: { height: 31, margin: 1, padding: 2, width: 50 }, defaultValue: "asd" })),
                        React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                            React.createElement("i", { className: "fas fa-angle-right" })),
                        React.createElement(Button, { size: "sm", style: __assign({}, buttonStyle) },
                            React.createElement("i", { className: "fas fa-angle-double-right" })))),
                React.createElement(Col, { xs: 4, style: { textAlign: "right" } },
                    React.createElement(Button, null,
                        "<",
                        " "),
                    React.createElement(Button, null,
                        " ",
                        ">",
                        " "))));
        };
        _this.state = {};
        return _this;
    }
    return TableFooterComponent;
}(Component));
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        openCrudModal: function () { return dispatch(CurdModalActions.openModal()); },
    };
};
var mapStateToProps = function (state, props) {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TableFooterComponent);
// export default Footer;
//# sourceMappingURL=tableFooter.component.js.map
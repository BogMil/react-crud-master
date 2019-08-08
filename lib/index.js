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
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { Provider } from 'react-redux';
import ReactCrudMasterComponent from './components/reactCrudMaster/reactCrudMaster.component';
import thunk from 'redux-thunk';
var ReactCrudMaster = /** @class */ (function (_super) {
    __extends(ReactCrudMaster, _super);
    function ReactCrudMaster(props) {
        var _this = _super.call(this, props) || this;
        _this.store = createStore(rootReducer, applyMiddleware(thunk));
        return _this;
    }
    ReactCrudMaster.prototype.render = function () {
        return (React.createElement(Provider, { store: this.store },
            React.createElement(ReactCrudMasterComponent, { dataProp: this.props.data, colModelsProp: this.props.colModels })));
    };
    return ReactCrudMaster;
}(Component));
export default ReactCrudMaster;
export { ColModel } from './types/ColModel';
//# sourceMappingURL=index.js.map
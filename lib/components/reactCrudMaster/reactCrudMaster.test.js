import React from "react";
import ReactCrudMaster from './reactCrudMaster.component';
import { render, cleanup, } from '@testing-library/react';
import { ColModel } from '../../types/ColModel';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../../rootReducer";
import thunk from "redux-thunk";
import { privateSetColModels } from "./reactCrudMaster.actions";
afterEach(cleanup);
var data = [
    {
        Id: 1,
        FirstName: "Milan Milan Milan Milan Milan Milan Milan Milan Milan Milan Milan ",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 2,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 3,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 4,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 5,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 6,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 7,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 8,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 9,
        FirstName: "Milan BOgdanovic BOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovic",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 10,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 11,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 12,
        FirstName: "Milan BOgdanovic BOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovic",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 13,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 14,
        FirstName: "Milan",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    },
    {
        Id: 15,
        FirstName: "Milan BOgdanovic BOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovicBOgdanovic BOgdanovic",
        LastName: "BOgdanovic",
        Username: "mbogda",
        Contact: "12345",
        Email: "mail@gmail.com"
    }
];
var colModels = [
    new ColModel({
        name: "Id",
        label: "Id",
        width: 150,
        minWidth: 150
    }),
    new ColModel({
        name: "FirstName",
        label: "first name",
        width: 200
    }),
    new ColModel({
        name: "LastName",
        label: "last name",
        width: 400,
    }),
    new ColModel({
        name: "Username",
        label: "Username",
        width: 150,
        minWidth: 150
    }),
    new ColModel({
        name: "Contact",
        label: "Contact",
        width: 150,
    })
];
describe('<ReactCrudMaster/>', function () {
    describe('with provided data', function () {
        it('shoult render without problems', function () {
            var store = createStore(rootReducer, applyMiddleware(thunk));
            render(React.createElement(Provider, { store: store },
                React.createElement(ReactCrudMaster, { dataProp: data, colModelsProp: colModels })));
        });
        it('shoult render default table title', function () {
            var store = createStore(rootReducer, applyMiddleware(thunk));
            var _a = render(React.createElement(Provider, { store: store },
                React.createElement(ReactCrudMaster, { dataProp: data, colModelsProp: colModels }))), getByText = _a.getByText, getAllByText = _a.getAllByText, getByTestId = _a.getByTestId;
            var tableHeader = getByTestId('cm-table-header');
            expect(tableHeader.textContent).toBe('Table title');
        });
        it('shoult render label-width-tester for geting with of label in pixel', function () {
            var store = createStore(rootReducer, applyMiddleware(thunk));
            var _a = render(React.createElement(Provider, { store: store },
                React.createElement(ReactCrudMaster, { dataProp: data, colModelsProp: colModels }))), getByText = _a.getByText, getAllByText = _a.getAllByText, getByTestId = _a.getByTestId;
            var x = document.body.querySelectorAll('#label-width-tester');
            expect(x.length).toBe(1);
        });
        it('shoult render custom table title', function () {
            var store = createStore(rootReducer, applyMiddleware(thunk));
            var customTitle = 'Custom Title';
            var _a = render(React.createElement(Provider, { store: store },
                React.createElement(ReactCrudMaster, { dataProp: data, colModelsProp: colModels, tableTitle: customTitle }))), getByText = _a.getByText, getAllByText = _a.getAllByText, getByTestId = _a.getByTestId;
            var tableHeader = getByTestId('cm-table-header');
            expect(tableHeader.textContent).toBe(customTitle);
        });
    });
});
describe('ReactCrudMaster.actions', function () {
    describe('privateSetColModels', function () {
        it('calculate the with of table as sum of withs of columns properly', function () {
            var colModels = [
                new ColModel({
                    name: "Id",
                    label: "Id",
                    width: 100,
                }),
                new ColModel({
                    name: "FirstName",
                    label: "first name",
                    width: 200
                }),
                new ColModel({
                    name: "LastName",
                    label: "last name",
                    width: 400
                }),
            ];
            var expectedWidth = colModels.reduce(function (acc, current) { return acc += current.width; }, 0);
            var actionResult = privateSetColModels(colModels);
            expect(actionResult.payload.tableWidth).toBe(expectedWidth);
        });
        it('calculate the with of table as sum of withs of columns when column is missing with property', function () {
            var colModels = [
                new ColModel({
                    name: "Id",
                    label: "Id",
                    width: 100,
                }),
                new ColModel({
                    name: "FirstName",
                    label: "first name",
                    width: 200
                }),
                new ColModel({
                    name: "LastName",
                    label: "last name",
                }),
            ];
            var expectedWidth = colModels.reduce(function (acc, current) { return acc += current.width; }, 0);
            var actionResult = privateSetColModels(colModels);
            expect(actionResult.payload.tableWidth).not.toBe(expectedWidth);
        });
    });
});
//# sourceMappingURL=reactCrudMaster.test.js.map
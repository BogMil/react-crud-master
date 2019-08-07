import React, { Component } from "react";
import { shallow } from 'enzyme';
import ReactCrudMaster from './reactCrudMaster.component';
import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
} from '@testing-library/react';
import { ColModel } from '../../types/ColModel';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../../rootReducer";
import thunk from "redux-thunk";

afterEach(cleanup)

let data = [
    {
        Id: 1,
        FirstName:
            "Milan Milan Milan Milan Milan Milan Milan Milan Milan Milan Milan ",
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

let colModels = [
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
        // minWidth: 150
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
        // minWidth: 150
    })
];

describe('<ReactCrudMaster/>', () => {
    describe('with provided data',()=>{
        it('shoult render without problems', () => {
            let store = createStore(rootReducer,applyMiddleware(thunk));
            render(
                <Provider store={store}>
                    <ReactCrudMaster dataProp={data} colModelsProp={colModels} />
                </Provider>
            )
        })

        it('shoult render default table title', () => {
            let store = createStore(rootReducer,applyMiddleware(thunk));

            const { getByText,getAllByText, getByTestId } = render(
                <Provider store={store}>
                    <ReactCrudMaster dataProp={data} colModelsProp={colModels} />
                </Provider>
            )
            
            let tableHeader = getByTestId('cm-table-header')
            expect(tableHeader.textContent).toBe('Table title')
        })

        it('shoult render custom table title', () => {
            let store = createStore(rootReducer,applyMiddleware(thunk));
            const customTitle = 'Custom Title';
            const { getByText,getAllByText, getByTestId } = render(
                <Provider store={store}>
                    <ReactCrudMaster dataProp={data} colModelsProp={colModels} tableTitle={customTitle}/>
                </Provider>
            )
            
            let tableHeader = getByTestId('cm-table-header')
            expect(tableHeader.textContent).toBe(customTitle);
        })
    })
    
})

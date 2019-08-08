/// <reference types="cypress" />
import 'cypress-react-unit-test'
import React from 'react'
import ReactCrudMaster from '../../src/components/reactCrudMaster/reactCrudMaster.component'
import { ColModel } from '../../src/types/colModel';
import { rootReducer } from '../../src/rootReducer';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';


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

describe('cypress-react-unit-test', () => {
  it('shows greeting', () => {
    let store = createStore(rootReducer, applyMiddleware(thunk));

    cy.mount(
    <Provider store={store}>
      <ReactCrudMaster colModelsProp={colModels} dataProp={data} />
      </Provider> as unknown as Symbol)
    cy.contains('Hello World')
  })

  // it('changes greeting on click', () => {
  //   cy.mount(<Greeting />)
  //   cy.get('button').click()
  //   cy.contains('Bonjour World')
  // })
})
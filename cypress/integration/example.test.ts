/// <reference types="cypress" />
/// <reference types="../../lib" />

import TestComponent from "../../src/components/testComponent";

import * as React from "react";

it("has a label", () => {
  cy.mount(<TestComponent />);
  cy.contains("My Button");
});

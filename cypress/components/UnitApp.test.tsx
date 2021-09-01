import React from "react";
import { mount } from "@cypress/react";
import {HeaderApp} from "../../src/modules/components/Header/HeaderApp";
import {NewTask} from "../../src/modules/components/Tab/NewTask";
import App from "../../src/App";
describe("Header", () => {
  it("renders learn react link", () => {
    mount(<App />);
    cy.contains('Header')
    
    // cy.contains('New Task').should('be.visible');
    // cy.get('#btn-new')
    
    
  });

  
});

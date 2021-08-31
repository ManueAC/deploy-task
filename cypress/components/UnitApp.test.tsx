import React from "react";
import { mount } from "@cypress/react";
import {HeaderApp} from "../../src/modules/components/Header/HeaderApp";
import {NewTask} from "../../src/modules/components/Tab/NewTask";

describe("Header", () => {
  it("renders learn react link", () => {
    mount(<HeaderApp />);
    
    cy.contains('New Task').should('be.visible');
    cy.get('#btn-new').click().visit('https://shrouded-lowlands-57716.herokuapp.com/tasks/new');
    
    
  });

  
});

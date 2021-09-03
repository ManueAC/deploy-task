import { mount } from "@cypress/react";
import { HeaderApp } from "./modules/components/Header/HeaderApp";

it("renders HeaderApp", () => {
  mount(<HeaderApp />);
  cy.contains("Resumen").should("be.visible");
  cy.contains("New Task").should("be.visible");

  cy.get("#btn-new")
    .should("contain", "New Task")
    .get("#btn-new")
    .should("have.a.prop", "style");
});

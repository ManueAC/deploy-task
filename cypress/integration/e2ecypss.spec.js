// e2ecypss.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
const elements = {
  tabNew: "#btn-new",
  btnCreate:
    ":nth-child(1) > .MuiGrid-container > .MuiButtonBase-root",
  btnEdit:
    ":nth-child(1) > :nth-child(4) > .MuiIconButton-label > .MuiSvgIcon-root",
  Title:
    ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #standard-full-width",
  Start: "#standard-basic",
  End: ".MuiGrid-container > .MuiFormControl-root > .MuiInputBase-root > #standard-basic",
  Dscr: ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #standard-full-width",
  UserSl: "#demo-simple-select",
  User: `.MuiList-root > [tabindex="0"]`,
  listDsply: "#tasks-list-display",
  listItem: "#tasks-list-display > :nth-child(1)",
  checked:
    ":nth-child(1) > .PrivateSwitchBase-root-18 > .MuiIconButton-label > .PrivateSwitchBase-input-21",
  update: {
    title:
      ".MuiDialogContent-root > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input",
    start:
      ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input",
    end: ".MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #name",
    usersSlt: "#demo-simple-select",
    user: `.MuiList-root > [tabindex="-1"]`,
    dscr: ":nth-child(4) > .MuiInputBase-root > #name",
    btnSave: ".MuiDialogActions-root > :nth-child(1) > .MuiButton-label",
    checking: "#tasks-list-display > :nth-child(1) > .PrivateSwitchBase-root-18 > .MuiIconButton-label > .PrivateSwitchBase-input-21"
  },
};

describe("Once A Upon A Time in... Load/Login", () => {
  it("Visits the site", () => {
    cy.visit("https://shrouded-lowlands-57716.herokuapp.com");
  
  });

  it("Log in in the app", () => {
    cy.get(".MuiButton-label").click();

    cy.get('#username')
    .click()
    .type(Cypress.env("username"));

    cy.get('#password')
    .click()
    .type(Cypress.env("password"));

    cy.get('.c6d7d2ace > .cd1df0865').click();

    cy.wait(3000)
    cy.location("pathname", { timeout: 50000 })
    cy.should("eq", "/")
    
    cy.contains("From E2E test")
  });

  it("Create a task", () => {
    cy.get(elements.tabNew).click();
    cy.location('pathname', {timeout: 50000}).should('eq', '/tasks/new');
    cy.get(elements.Title).type("From E2E test").should("have.value", "From E2E test")
    cy.get(elements.Start).type("2021-10-10").should("not.have.value", "")
    cy.get(elements.End).type("2021-10-10").should("not.have.value", "")
    cy.get(elements.Dscr).type("Descrip. From E2E Text Extra-Large Test To Test Grid").should("not.have.value", "")
    cy.get(elements.UserSl).click().should("have.lengthOf.at.least", 1);
    cy.get(elements.User).click().should("not.have.value", "");

    cy.get(elements.btnCreate).click();

  });

  it("Search for task created previously", () => {
    cy.location("pathname", { timeout: 50000 }).should("eq", "/");
    cy.contains("From E2E test");
    cy.wait(3000);
  });

  it("Look for the status of a task", () => {
    cy.location("pathname", { timeout: 50000 }).should("eq", "/");
    cy.get(elements.checked).should("have.prop", "checked").should("be.false");
    cy.wait(3000);

  });

  it("Update a task", () => {
    cy.get(elements.btnEdit).click()
    .get(elements.update.title).type("{selectAll}E2E Task Update").should("not.have.value", "")
    .get(elements.update.start).type("2021-10-10").should("not.have.value", "")
    .get(elements.update.end).type("2021-11-10").should("not.have.value", "")
    .get(elements.update.usersSlt).click().should("have.lengthOf.at.least", 1)
    .get(elements.update.user).click()
    .get(elements.update.dscr).type("E2E Updated Description").should("not.have.value", "")

    .get(elements.update.btnSave).click();
    cy.wait(3000);
  });

  it("Mark a task as done!", () => {
    cy.get(
      elements.update.checking
    ).click();
    cy.wait(3000);
  });
});

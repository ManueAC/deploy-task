// e2ecypss.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
const inputs = {
  tabNew: "#btn-new",
  btnCreate:
    ".makeStyles-root-24 > :nth-child(1) > .MuiGrid-container > :nth-child(1)",
  Title:
    ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #standard-full-width",
  Start: "#standard-basic",
  End: ".MuiGrid-container > .MuiFormControl-root > .MuiInputBase-root > #standard-basic",
  Dscr: ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #standard-full-width",
  UserSl: "#demo-simple-select",
  User: `.MuiList-root > [tabindex="0"]`,
};

describe("Once A Upon A Time in... Load/Login", () => {
  it("Visits the site", () => {
    cy.visit("https://shrouded-lowlands-57716.herokuapp.com");
  });

  it("Log in in the app", () => {
    const options = {
      method: "POST",
      url: Cypress.env("url"),
      body: {
        grant_type: "password",
        username: Cypress.env("username"),
        password: Cypress.env("password"),
        audience: Cypress.env("audience"),
        scope: "openid profile email",
        client_id: Cypress.env("client_id"),
        client_secret: Cypress.env("client_secret"),
      },
    };
    cy.get(".MuiButton-label").click();
    cy.request(options);
    cy.location('pathname', {timeout: 50000}).should('eq', '/');

    
  });

  it("Create a task", () => {
    cy.get(inputs.tabNew).click();
    cy.location('pathname', {timeout: 50000}).should('eq', '/tasks/new');
    cy.get(inputs.Title).type("From E2E test").should("have.value", "From E2E test")
    cy.get(inputs.Start).type("2021-10-10").should("not.have.value", "")
    cy.get(inputs.End).type("2021-10-10").should("not.have.value", "")
    cy.get(inputs.Dscr).type("Descrip. From E2E Text Extra-Large Test To Test Grid").should("not.have.value", "")
    cy.get(inputs.UserSl).click().should("have.lengthOf.at.least", 1);
    cy.get(inputs.User).click().should("not.have.value", "");

    cy.get(inputs.btnCreate).click();

  });

  it("Check task created previously", () => {
    
    cy.contains("From E2E test");
  });

  // it("Request", () => {
  //   const requestData = {
  //     method: "POST",
  //     url: Cypress.env("REACT_APP_WORKSPACE_ENDPOINT"),
  //     body: {
  //       email: Cypress.env("email"),
  //       password: Cypress.env("password"),
  //       client_id: Cypress.env("REACT_APP_AUTH_CLIENT_ID")
  //     }
  //   };
    
  //   cy.request(requestData);
  // });
});



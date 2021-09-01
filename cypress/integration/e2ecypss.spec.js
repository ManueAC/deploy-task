// e2ecypss.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Once A Upon A Time in... Load/Login", () => {
  it("Visits the site", () => {
    cy.visit("https://shrouded-lowlands-57716.herokuapp.com/");
  });

  it("Log in in the app", () => {
    const options = {
      method: 'POST',
      url: Cypress.env('url'),
      body: {
        grant_type: 'password',
        username: Cypress.env('email'),
        password: Cypress.env('password'),
        audience: Cypress.env('audience'),
        scope: 'openid profile email',
        client_id: Cypress.env('client_id'),
        client_secret: Cypress.env('client_secret'),
      },
    };
    cy.get(".MuiButton-label").click();
    cy.request(options);
  });

  it("Display quantity", () => {
    cy.get("#btn-new").click();
    cy.get("#standard-full-width").type("From E2E test");
    
    cy.get("#standard-basic").type("")
    
    
  });


});

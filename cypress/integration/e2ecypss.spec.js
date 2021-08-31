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
    console.log(window.location);
    // cy.get("#username").click()
    // cy.get("#password").select(options.password);
    // cy.get('.c1f2fb00e > .c8e21b80b').click();
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
  })

  it("New task: check for each field contains data, then creates it", () => {
    const form = ':nth-child(1) > .MuiFormControl-root';
    const btnSub = '.makeStyles-root-24 > :nth-child(1) > .MuiGrid-container > :nth-child(1)';
    const tName = ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #standard-full-width';

    
    
    // cy.get(form)
    // expect(tName[value]).not.equal('');
    // cy.get(btnSub);
})
});
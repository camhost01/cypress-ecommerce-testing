import elemet from '../support/elements/Register';
const data = require('../fixtures/data.json');

describe('User Register', () => {
  beforeEach(() => {
    cy.visit('/auth/signup');
  });

  it('Save a new user', () => {
    cy.fillForm(data.name,data.email, data.password);
    cy.clickOnElement(elemet.SUBMIT);
    cy.waitElement(elemet.SUCCESS_MESSAGE);
    cy.clickOnElement(elemet.IR_LOGIN);
  });
});
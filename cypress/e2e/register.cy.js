import elemet from '../support/elements/Register';
import selector from '../support/utilities';
const data = require('../fixtures/data.json');

describe('Registro de usuario', () => {
  beforeEach(() => {
    cy.visit('/auth/signup');
  });

  it('Registro un nuevo usuario exitosamente', () => {
    cy.fillForm(data.name,data.email, data.password);
    selector.getByCssSelector(elemet.SUBMIT).click();
    selector.getByCssSelector(elemet.SUCCESS_MESSAGE).should('be.visible');
    selector.getByCssSelector(elemet.IR_LOGIN).should('be.visible').click();
  });
});
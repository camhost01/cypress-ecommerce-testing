import Checkout from '../support/elements/Checkout';
import selector from '../support/utilities';
import cartElement from '../support/elements/Cart';

describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.addFirstProduct();
    cy.openCart();
    selector.getByCssSelector(cartElement.CHECKOUT_BUTTON)
      .should('be.visible')
      .click();
  });

  it('Debería completar el checkout correctamente', () => {
    cy.logOnSite();
  });
});
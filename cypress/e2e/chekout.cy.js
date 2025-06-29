import checkoutElement from '../support/elements/Checkout';
import cartElement from '../support/elements/Cart';

describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.addFirstProduct();
    cy.openCart();
    cy.clickOnElement(cartElement.CHECKOUT_BUTTON);
  });

  it('Completar el checkout correctamente', () => {
    cy.logOnSite();
    cy.openCart();
    cy.clickOnElement(cartElement.CHECKOUT_BUTTON);
    cy.waitElement(checkoutElement.HEADER_HOME);
    cy.addBuyerData();
    cy.addCardData();
    cy.clickOnElement(checkoutElement.COMPLETE_CHECKOUT_BUTTON);
    cy.waitElement(checkoutElement.CHECKOUT_SUCCESS_MESSAGE);
  });
});
import selector from '../utilities';
import regelemet from '../elements/Register';
import cartelement from '../elements/Cart';
import checkoutElement from '../elements/Checkout';
const data = require('../../fixtures/data.json');

Cypress.Commands.add('fillForm', (username = 'testuser', email = 'test@example.com', password = 'Test1234') => {
  // Fill the registration form with provided or default values
  selector.getByCssSelector(regelemet.NAME).type(username);
  selector.getByCssSelector(regelemet.EMAIL).type(email);
  selector.getByCssSelector(regelemet.PASSW).type(password);
  selector.getByCssSelector(regelemet.REPEAT_PASSW).type(password);
});

Cypress.Commands.add('addFirstProduct', () => {
  // Add the first product to the cart
  selector.getByCssSelector(cartelement.CART_ITEM).first().click();
});

Cypress.Commands.add('openCart', () => {
  selector.getByCssSelector(cartelement.CART_ICON)
    .should('be.visible')
    .click();
  selector.getByCssSelector(cartelement.CART_EMPTY).should('not.exist');
});

Cypress.Commands.add('clickOnElement', (element) => {
  // Add the first product to the cart
  selector.getByCssSelector(element).should('be.visible')
    .click();
});

Cypress.Commands.add('waitElement', (element) => {
  // Add the first product to the cart
  selector.getByCssSelector(element).should('be.visible');
});
Cypress.Commands.add('logOnSite', (type = true) => {
  // Log in to the application
  switch (type) {
    case true:
      selector.getByCssSelector(regelemet.INGRESA_MAIL)
        .should('be.visible')
        .type(data.email);
      selector.getByCssSelector(regelemet.INGRESA_PASSW)
        .should('be.visible')
        .type(data.password);
      break;
    case false:
      selector.getByCssSelector(regelemet.INGRESA_MAIL)
        .should('be.visible')
        .type("cualquier cosa");
      selector.getByCssSelector(regelemet.INGRESA_PASSW)
        .should('be.visible')
        .type("cualquier cosa");
      break;
  }
  selector.getByCssSelector(regelemet.LOGIN)
    .should('be.visible')
    .click();
});

Cypress.Commands.add('addBuyerData', () => {
  // Add the first product to the cart
  selector.getByCssSelector(checkoutElement.NAME).should('be.visible')
    .type(data.name);
  selector.getByCssSelector(checkoutElement.LAST_NAME).should('be.visible')
    .type(data.lastName);
  selector.getByCssSelector(checkoutElement.EMAIL).should('be.visible')
    .type(data.email);
  selector.getByCssSelector(checkoutElement.ADDRESS).should('be.visible')
    .type(data.address);
  selector.getByCssSelector(checkoutElement.COUNTRY).should('be.visible')
    .select(data.country);
});

Cypress.Commands.add('addCardData', () => {
  // Add the first product to the cart
  selector.getByCssSelector(checkoutElement.CARD_NAME).should('be.visible')
    .type(data.name);
  selector.getByCssSelector(checkoutElement.CARD_NUMBER).should('be.visible')
    .type(data.creditCard);
  selector.getByCssSelector(checkoutElement.EXPIRATION_DATE).should('be.visible')
    .type(data.expirationDate);
  selector.getByCssSelector(checkoutElement.CVV).should('be.visible')
    .type(data.cvv);
});
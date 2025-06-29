import cartElement from '../support/elements/Cart';
import selector from '../support/utilities';

describe('Carrito de compras', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Agregar un producto al carrito', () => {
    cy.addFirstProduct();
    cy.openCart();
  });
}); 
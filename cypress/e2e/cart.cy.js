describe('Shoping cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Save a product in the cart', () => {
    cy.addFirstProduct();
    cy.openCart();
  });
}); 
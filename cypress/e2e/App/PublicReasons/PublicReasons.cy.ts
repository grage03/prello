describe('public-reasons', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('public-reasons -- render', () => {
    cy.get('[data-test-id="public-reasons"]').should('be.visible')
  })
})

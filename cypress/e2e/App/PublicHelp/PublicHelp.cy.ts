describe('public-help', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('public-help -- render', () => {
    cy.get('[data-test-id="public-help"]').should('be.visible')
  })
})

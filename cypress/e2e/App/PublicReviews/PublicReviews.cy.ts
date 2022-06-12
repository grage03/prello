describe('public-reviews', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('public-reviews -- render', () => {
    cy.get('[data-test-id="public-reviews"]').should('be.visible')
  })
})

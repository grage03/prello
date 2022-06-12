describe('public-assessment', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('public-assessment -- render', () => {
    cy.get('[data-test-id="public-assessment"]').should('be.visible')
  })
})

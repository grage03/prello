describe('public-partners', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('public-partners -- render', () => {
    cy.get('[data-test-id="public-partners"]').should('be.visible')
  })
})

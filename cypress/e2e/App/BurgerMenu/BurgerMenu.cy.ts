const openMenu = () => {
  cy.viewport('iphone-x')
  cy.get('[data-test-id="burger-menu"]').click()
  cy.get('[data-test-id="burger-menu-inner"]').should('be.visible')
}

describe('burger-menu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('burger-menu -- not render', () => {
    cy.get('[data-test-id="burger-menu"]').should('not.exist')
  })

  it('burger-menu -- render', () => {
    cy.viewport('iphone-x')
    cy.get('[data-test-id="burger-menu"]').should('exist')
  })

  it('burger-menu -- it opens correctly', () => {
    openMenu()
  })

  it('burger-menu -- closes correctly', () => {
    openMenu()
    cy.get('[data-test-id="burger-menu-close"]').click()
    cy.get('[data-test-id="burger-menu-inner"]').should('not.exist')
    openMenu()
    cy.get('[data-test-id="burger-menu-inner"]').click('right')
    cy.get('[data-test-id="burger-menu-inner"]').should('not.exist')
  })
})

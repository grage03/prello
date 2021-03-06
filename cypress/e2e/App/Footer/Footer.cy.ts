describe('footer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('footer -- render', () => {
    cy.get('[data-test-id="footer"]').scrollIntoView()
  })

  it('footer -- change language', () => {
    cy.get('[data-test-id="reasons"]').contains('Почему Прелло?')
    // TODO: move to command
    cy.get('[data-test-id="change-language"]').click().contains('en').click()
    cy.get('[data-test-id="reasons"]').contains('Why prello?')
  })
})

describe('main', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('main -- render', () => {
    cy.get('[data-test-id="public-main"]').should('be.visible')
  })

  it('main -- correct title and meta-content', () => {
    const title = 'Prello - the best task manager in the world'
    const content = 'Prello is the best solution for teams to organize work on the application. A huge number of useful features are combined with pleasant functionality.'

    cy.get('title').contains(title)
    cy.get('meta[name="description"]').should("have.attr", "content", content)
  })
})

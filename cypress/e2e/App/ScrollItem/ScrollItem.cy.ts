describe('scroll-item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('scroll-item -- not shown', () => {
    cy.get('[data-test-id="scroll-item"]').should('not.exist')
  })

  it('scroll-item -- render', () => {
    cy.scrollTo(0, 300)
    cy.get('[data-test-id="scroll-item"]').should('exist')
  })

  it('scroll-item -- scroll to top', () => {
    cy.scrollTo(0, 700)
    cy.get('[data-test-id="scroll-item"]').click()
    cy.window().its("scrollY").should((scrollY) => {
      expect(scrollY).to.be.closeTo(0, 0)
    })
  })

  it('scroll-item -- not shown on phone', () => {
    cy.viewport('iphone-x')
    cy.scrollTo(0, 300)
    cy.get('[data-test-id="scroll-item"]').should('not.exist')
  })
})

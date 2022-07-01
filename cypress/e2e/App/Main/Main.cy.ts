describe('main', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('main -- render', () => {
    cy.get('[data-test-id="public-main"]').should('be.visible')
  })

  it('main -- correct title and meta-content', () => {
    const title = 'Прелло - лучший менеджер задач в мире'
    const content = 'Прелло - это лучшее решение для команд по организации работы над приложением. Огромное количество полезных возможностей объединено c приятным функционалом.'

    cy.get('title').contains(title)
    cy.get('meta[name="description"]').should("have.attr", "content", content)
  })
})

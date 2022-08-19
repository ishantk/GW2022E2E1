describe('My First Test', () => {
 
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Application Name')
    cy.contains('phatakapp')
  })

  it('Visits the NewsApi.org', () => {
    cy.visit('https://newsapi.org/')
    cy.contains('Login').click()
  })

})

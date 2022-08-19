describe('My First Test', () => { 
    it('Visits the NewsApi.org', () => {
      cy.visit('https://newsapi.org/')
      cy.contains('Login').click()
    })
  })
  
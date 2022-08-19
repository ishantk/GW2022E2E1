describe('My NewsAPI Login Test', () => { 

    it('Visit the NewsAPI and Login', () => {
        cy.visit('https://newsapi.org/login')
        cy.get("input[name='Email']").type("tuser6794@gmail.com")
        cy.get("input[name='Password']").type("tuser6794@gmail.com")
        cy.get(".ladda-button").click()
        //cy.get("button").click()
        cy.contains("Account")

    })

    it('Visit the NewsAPI and Login', () => {
        cy.visit('https://newsapi.org/login')
        cy.get("input[name='Email']").type("john@example.com")
        cy.get("input[name='Password']").type("john@123")
        //cy.get(".ladda-button").click()
        cy.get("button").click()
        cy.contains("The password entered doesn't match the one on file for that email address")

    })
})
  
describe('My Login Test', () => { 
    it('Visit the Facebook and Login', () => {
        // Locators in Cypress
        // Locate a web element By
        // 1. Name
        // 2. Tag
        // 3. Id
        // 4. CSS (Class name)
        // 5. XPath (//*[@id="email"])

        cy.visit('https://www.facebook.com/')
        cy.get("#email").type("john@example.com")
        cy.get("#pass").type("john123456")
        cy.get("#loginbutton").click()
        cy.contains("ਇਸ ਗੁਜਾਰਿਸ਼ ਨਾਲ ਸਮੱਸਿਆ ਹੋ ਗਈ")

    })
})
  
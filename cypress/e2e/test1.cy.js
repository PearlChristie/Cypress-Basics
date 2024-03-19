it("learning assertions", () => {{
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    //implicit Assertions
    // cy.get('#query-btn').should('contain', 'Button')
    //                     .should('have.class','query-btn')
    //                     .should('be.visible')
    //                     .should('be.enabled')
cy.get('#query-btn').invoke('attr', 'id').should('equal', 'query-btn')
cy.get('#query-btn').should('contain', 'Button').and('have.class', 'query-btn')

// Explicit Assertions
   let name = 'Akash'
   expect(name).to.be.equal('Akash')

}
})
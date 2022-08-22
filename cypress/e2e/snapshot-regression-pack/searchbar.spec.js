describe('Validate searchbar @regression @searchbar', () => {

  // Redirects to home page before executing the test
    before('Visit SnapShot webapp', () => {
        cy.visit('/home')
      })

    it('Searchbar takes input text and sets same value in the url and returns at least 1 result', () => {
      const searchTerm = 'cake'
      // Get an input, type into it and verify that the value has been updated
      cy.get('[data-e2e="searchText"]')
      .type(searchTerm)
      .should('have.value', searchTerm)
      cy.get('[data-e2e="searchSubmit"]').click({force: true})
      // Should be on a new URL which includes '/SnapScout/search'
      cy.url().should('include', '/SnapScout/search/'+searchTerm)
      // To check if the heading matches
      cy.get('h2').should("have.text", searchTerm);
      // To check if at least 1 image is returned
      cy.get(".photo-container").find('li').should('have.length.greaterThan', 1);
  })
})
describe('Validate homepage @regression @homepage', () => {

  // Redirects to home page
    before('Visit SnapShot webapp', () => {
        cy.visit('')
      })

    //Check if correct url is displayed
    it('Click on page title to return to home page with correct url', () => {
        cy.get('h1').contains('SnapShot').click()
        // URL should include '/SnapScout/home'
        cy.url().should('include', '/SnapScout/home')
      })

    //Check if the searchbar is displayed
    it('Searchbar is displayed', () => {
      cy.get('.search-form').should('be.visible')
    });

    //Check if the navigation bar is displayed
    it('Navigation bar is displayed', () => {
      cy.get('.main-nav').should('be.visible')
    });

    //Check if page not found is not displayed
    it("Page not found is not displayed", () => {
      cy.get('.not-found').should('not.be.visible')
    }); 

})
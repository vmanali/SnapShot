describe('Validate all default CTAs @regression @defaultCTAs', () => {
    
  // Redirects to home page before each test
    beforeEach('Visit SnapShot webapp', () => {
      cy.visit('/home')
    })

    it('Click on Mountain CTA returns at least one image with relevant url and heading', () => {
      var defaultCTA = 'Mountain'
      var lowerCTA = defaultCTA.toLowerCase();
      // Should be on a new URL which includes '/SnapScout/mountain'
      cy.get('.main-nav').contains(defaultCTA).click()
      cy.url().should('include', '/SnapScout/'+lowerCTA)
      // To check if the heading matches
      cy.get('h2').contains(lowerCTA)
      // To check if at least 1 image is returned 
      cy.get(".photo-container").find('li').should('have.length.greaterThan', 1);
    })

    it('Click on Beaches CTA returns at least one image with relevant url and heading', () => {
      var defaultCTA = 'Beaches'
      var lowerCTA = 'beach'
      // Should be on a new URL which includes '/SnapScout/beach'
      cy.get('.main-nav').contains(defaultCTA).click()
      cy.url().should('include', '/SnapScout/'+lowerCTA)
      // To check if the heading matches
      cy.get('h2').contains(lowerCTA)
      // To check if at least 1 image is returned 
      cy.get(".photo-container").find('li').should('have.length.greaterThan', 1);
    })

    it('Click on Birds CTA returns at least one image with relevant url and heading', () => {
      var defaultCTA = 'Birds'
      var lowerCTA = 'bird'
      // Should be on a new URL which includes '/SnapScout/bird'
      cy.get('.main-nav').contains(defaultCTA).click()
      cy.url().should('include', '/SnapScout/'+lowerCTA)
      // To check if the heading matches
      cy.get('h2').contains(lowerCTA)
      // To check if at least 1 image is returned 
      cy.get(".photo-container").find('li').should('have.length.greaterThan', 1);
    })

    it('Click on Food CTA returns at least one image with relevant url and heading', () => {
      var defaultCTA = 'Food'
      var lowerCTA = defaultCTA.toLowerCase();
      // Should be on a new URL which includes '/SnapScout/food'
      cy.get('.main-nav').contains(defaultCTA).click()
      cy.url().should('include', '/SnapScout/'+lowerCTA)
      // To check if the heading matches
      cy.get('h2').contains(lowerCTA)
      // To check if at least 1 image is returned 
      cy.get(".photo-container").find('li').should('have.length.greaterThan', 1);
    })

    // Ideally I would remove it but I have left this block of code here just to demonstrate a
    // different way of implementing this solution to check for the default screens

   /*it('Verify if default screens appear with the correct url and a relevant heading', () => {
      //Runs loop over all <li> within main-nav
      cy.get('li').each(($li) => {
      var defaultCTA = $li.text()
      var lowerCTA
      if(defaultCTA.trim() == 'Beaches'){
        lowerCTA = 'beach';
      }
      else if(defaultCTA.trim() == 'Birds'){
        lowerCTA = 'bird';
      }
      else{
         lowerCTA = defaultCTA.toLowerCase();
      }
      // Should be on a new URL which includes '/SnapScout/**'
      cy.get('.main-nav').contains(defaultCTA).click()
      cy.url().should('include', '/SnapScout/'+lowerCTA)
      cy.get('h2').contains(lowerCTA)
      cy.get(".photo-container").find('li').should('have.length.greaterThan', 1);
    })
  })*/

  })

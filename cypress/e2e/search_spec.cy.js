describe("The search function", () => {
  it("returns a bookshop based on searching name", () => {
    cy.visit('/openbook');
    
    cy.get('#search').type("Gay's the Word");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Gay's the Word");
  })

  it("returns a bookshop when entered in all lower case", () => {
    cy.visit('/openbook');
   
    cy.get('#search').type("round table books");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Round Table Books");
  })

  it("returns a bookshop name when entered without punctuation", () => {
    cy.visit('/openbook');

    cy.get('#search').type("gays the word");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Gay's the Word");
  })

  it("returns a bookshop when entered without spaces",() => {
    cy.visit('/openbook');
    cy.get('#search').type("gaystheword");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Gay's the Word");

    cy.visit('/openbook');
    cy.get('#search').type("artwordsbookshop");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Artwords Bookshop");
  })

  it("searches by tags",() => {
    cy.visit('/openbook');
    cy.get('#search').type("children");
    cy.get('#submit-search').click();

    cy.get("#ribabookshop").should("exist")
    cy.get("#chenerbooks").should("exist")

    cy.get('#housmansbookshop').should("not.exist")
  })

  it("searches by tags for LGBTQ",() => {
    cy.visit('/openbook');
    cy.get('#search').type("LGBTQ");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should('exist');

    cy.visit('/openbook');
    cy.get('#search').type("lgbtq");
    cy.get('#submit-search').click();

    cy.get("#gaystheword").should('exist');
    cy.get("chenerbooks").should('not.exist');
  })

  it("searches by tags regardless of capitalisation",() => {
    cy.visit('/openbook');
    cy.get('#search').type("CHILDREN");
    cy.get('#submit-search').click();

    cy.get("#ribabookshop").should("exist")
    cy.get("#chenerbooks").should("exist")
    cy.get('#housmansbookshop').should("not.exist")
  })

  it('searches by incomplete name',() => {
    cy.visit('/openbook');
    cy.get('#search').type("rib");
    cy.get('#submit-search').click();

    cy.get("#ribabookshop").should("exist")
  })

  it('shows a message for no search results',() => {
    cy.visit('/openbook');
    cy.get('#search').type("rhythm in my soul");
    cy.get('#submit-search').click();

    cy.get('#no-results-found').should('contain', '0 results found')
  })

  it("should reset to homepage after search", () => {
    cy.visit('/openbook')
    cy.get('#search').type("children");
    cy.get('#submit-search').click();

    cy.get('#toggle').should('contain', 'Reset')

    cy.get('#toggle').click()
    cy.url().should('eq', 'http://localhost:3030/openbook')
  })

  it("should redirect to home page when search input empty", () => {
    cy.visit('/openbook')
    cy.get('#submit-search').click();

    cy.url().should('eq', 'http://localhost:3030/openbook')
  })
})
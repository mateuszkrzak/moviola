describe('Main page ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000');
  });

  it('should render search component and the list of movies', () => {
    cy.get('[data-qa="search-bar"]').should('have.attr', 'placeholder', 'Type something');
    cy.get('[data-qa="search-button"]').should('contain', 'Find');

    cy
      .get('[data-qa="movie-list"]')
      .children()
      .should('have.length', 10);
  });
});

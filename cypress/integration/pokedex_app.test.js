
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Individual PokemonPage can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ponyta').click()
    cy.contains('run away')
  })
})
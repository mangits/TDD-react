describe("Home page", () => {
  beforeEach(() => {
      cy.visit('/')
  })
  it("displays a recipe name under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    const recipeName = 'Tofu Scramble Tacos';
    cy.findByRole('button').click()
    cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName)
    cy.findByRole('textbox', {name: /instructions/i}).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")

    return cy.findByRole('button').click()
      .then(() => {
      expect(cy.findByRole('listitem', /tofu scramble tacos/i)).toExist();
      })
  })
})
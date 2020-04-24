describe('Testing the newsletter form', function(){
    this.beforeEach(function() {
        cy.visit("http://localhost:3000/newsletter");
    })
    it('Selecting the name input as well as selecting a value', function(){
      cy.get("input[name='name']")
        .type("Isaias")
        .should("have.value", "Isaias")
      cy.get("input[name='lastName']")
        .type("Garcia")
        .should("have.value", "Garcia")
      cy.get("input[name='email']")
        .type("paramo@gmail.com")
        .should("have.value", "paramo@gmail.com")
      cy.get('button')
        .click()
    })
});
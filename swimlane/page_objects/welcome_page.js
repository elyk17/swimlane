export default{
    complete_your_profile: () => cy.get('[data-cy="title__text"]', {timeout: 10000}),
    edit_profile: () => cy.get('[class="btn btn-primary"]', {timeout: 10000}),
    next_button: () => cy.get('[data-cy="next__btn"]', {timeout: 10000}),
    previous_button: () => cy.get('[data-cy="previous__btn"]', {timeout: 10000}),
    view_documentation: () => cy.get('[data-cy="action__btn"]', {timeout: 10000}),
    close_help: () => cy.get('[data-cy="close__btn"]', {timeout: 10000})
}
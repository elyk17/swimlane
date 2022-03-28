
export default{
    logout_message: () => cy.get('[data-cy="logout__msg"]', {timeout: 10000}).contains('You have successfully logged out'),
    return_to_swimlane: () => cy.get('[data-cy="return__btn"]', {timeout: 10000})
}
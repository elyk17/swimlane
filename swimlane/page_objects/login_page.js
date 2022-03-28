export default{
    username: () => cy.get('ngx-input', {timeout: 10000}).eq(0).find('div').find('div').find('div').find('div').find('input'),
    password: () => cy.get('ngx-input', {timeout: 10000}).eq(1).find('div').find('div').find('div').find('div').find('input'),
    view_password: () => cy.get('[type="button"]', {timeout: 10000}),
    submit_button: () => cy.get('[data-cy="submit__btn"]', {timeout: 10000}),
    login_error: () => cy.get('div', {timeout: 10000}).contains('Login failed')
}
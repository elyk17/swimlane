import login from '../../page_objects/login'

describe('Login Test', () => {
    it('login test', () => {
        cy.visit(Cypress.env('baseUrl'))
        login.username().type('abcdefghijklmnopqrstuvwzyz').should('have.value', 'abcdefghijklmnopqrstuvwzyz')
        login.password().type('abcdefghijklmnopqrstuvwzyz').should('have.value', 'abcdefghijklmnopqrstuvwzyz')
        login.username().clear({force: true}).type('1234567890').should('have.value', '1234567890')
        login.password().clear({force: true}).type('1234567890').should('have.value', '1234567890')
        login.username().clear({force: true}).type('!@#$%^&*').should('have.value', '!@#$%^&*')
        login.password().clear({force: true}).type('!@#$%^&*').should('have.value','!@#$%^&*')

        //Testing password viewer
        cy.get('[class="ngx-input-box-wrap"]').eq(1).find('[type="password"]').should('exist')
        cy.get('[class="ngx-input-box-wrap"]').eq(1).find('[type="text"]').should('not.exist')
        login.view_password().click({force: true})
        cy.get('[class="ngx-input-box-wrap"]').eq(1).find('[type="password"]').should('not.exist')
        cy.get('[class="ngx-input-box-wrap"]').eq(1).find('[type="text"]').should('exist')

        //Invalid username valid password
        login.username().clear({force: true}).type('Kmartinez').should('have.value', 'Kmartinez')
        login.password().clear({force: true}).type(Cypress.env('password'))
        login.login_error().should('not.exist')
        login.submit_button().should('be.visible').click({force: true})
        login.login_error().should('exist')

        //Valid username invalid password
        login.username().clear({force: true}).type(Cypress.env('username'))
        login.password().clear({force: true}).type('abcdef!@#$').should('have.value', 'abcdef!@#$')
        login.submit_button().click({force: true})
        login.login_error().should('be.visible')

        //valid credentials
        login.username().clear({force: true}).type(Cypress.env('username'))
        login.password().clear({force: true}).type(Cypress.env('password'))
        login.submit_button().click({force: true})
        cy.wait(1000)
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
    })
})
import profile from '../../page_objects/profile_page'   
import welcome from '../../page_objects/welcome_page'
import header from '../../page_objects/header'
import logout from '../../page_objects/logout_page'
import login from '../../page_objects/login_page'
describe('functional test', () => {
    beforeEach(function() {
        cy.login()
    })
    it('edit password test', () => {
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        welcome.edit_profile().should('be.visible').click({force: true})
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/user/a3RsOXUQCP0jrJDQc')
        cy.wait(1000)
        profile.password_header().should('be.visible').click({force: true})
        
        //checking to make sure the requirements are showing not passed at beginning of test
        profile.not_current_password_not_passed().should('exist')
        profile.minimum_characters_not_passed().should('exist')
        profile.complexity_level_requirement_not_passed().should('exist')
        profile.must_match_password_not_passed().should('exist')

        //checking current password
        profile.current_password().should('have.value', '')
        profile.current_password().type('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*+').should('have.value', 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*') //Testing max length of 70 characters
        profile.not_current_password_passed().should('exist')
       
        //checking new password
        profile.new_password().type('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*+').should('have.value', 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*') //Testing max length of 70 characters
        profile.not_current_password_not_passed().should('exist')
        profile.new_password().clear({force: true}).type('aaaa')
        profile.not_current_password_passed().should('exist')
        profile.minimum_characters_not_passed().should('exist')
        profile.new_password().clear({force: true}).type('a!c@4f').should('have.value', 'a!c@4f')
        profile.minimum_characters_passed().should('exist')

        //checking confirm new password
        profile.confirm_new_password().type('a!c@4f').should('have.value', 'a!c@4f')
        profile.not_current_password_passed().should('exist')
        profile.minimum_characters_passed().should('exist')
        profile.must_match_password_passed().should('exist')
        profile.confirm_new_password().clear({force: true}).type('aaaaaa').should('have.value', 'aaaaaa')
        profile.must_match_password_not_passed().should('exist')
        profile.confirm_new_password().clear({force: true}).type('a!c@4f')

        //Checking to see if current password isn't current password
        profile.update_password_button().should('be.visible').click()
        profile.invalid_password().should('be.visible')
        cy.wait(3000)
        //update password
        profile.current_password().clear({force: true}).type(Cypress.env('password'))
        profile.update_password_button().click()
        profile.password_updated().should('be.visible')

        //logout and try password   
        header.dropdown_menu().click({force: true})
        header.logout().click({force: true})
        cy.wait(1000)
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/logout')

        //log back in using new password
        logout.logout_message().should('be.visible')
        logout.return_to_swimlane().should("be.visible").click({force: true})
        cy.wait(1000)
        cy.url('eq', Cypress.env('baseUrl'))
        login.username().clear({force: true}).type(Cypress.env('username'))
        login.password().clear({force: true}).type('a!c@4f')
        login.submit_button().should('be.visible').click({force: true})
        cy.wait(1000)
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        
        //Change password back to environment password
        welcome.edit_profile().should('be.visible').click({force: true})
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/user/a3RsOXUQCP0jrJDQc')
        cy.wait(1000)
        profile.password_header().should('be.visible').click({force: true})
        profile.current_password().clear({force: true}).type('a!c@4f').should('have.value', 'a!c@4f')
        profile.new_password().clear({force: true}).type(Cypress.env('password'))
        profile.confirm_new_password().clear({force: true}).type(Cypress.env('password'))
        profile.update_password_button().should('be.visible').click({force: true})
        profile.password_updated().should('be.visible')
    })
})
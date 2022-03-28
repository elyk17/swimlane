import welcome from '../../page_objects/welcome_page'
import profile from '../../page_objects/profile_page'
import header from '../../page_objects/header'


describe('functional test', () => {
    beforeEach(function() {
        cy.login()
    })
    it('personal access token test', () => {
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        welcome.edit_profile().should('be.visible').click({force: true})
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/user/a3RsOXUQCP0jrJDQc')
        cy.wait(1000)
        profile.personal_access_token_header().should("be.visible").click({force: true})
        profile.no_token_exists().should('be.visible')
        profile.generate_token().should("be.visible").click({force: true})
        profile.token_enabled().should('be.visible')
        profile.personal_access_token().should('be.visible')
        profile.button_2(' Delete ').should('exist')
        profile.button_1(' Copy ').should('exist').click({force: true})
        profile.copied_to_clipboard_message().should('be.visible')

        //validating that the copy button is now gone
        profile.general_neader().should('be.visible').click({force: true})
        cy.wait(1000)
        profile.personal_access_token_header().should('be.visible').click({force: true})
        profile.button_1(' Delete ').should("be.visible")
        profile.personal_access_code().contains(' • • • • • • • • • • • • • • • • • • • • ')
        profile.button_1(' Delete ').click({force: true})
        profile.delete_pat_modal().should('be.visible')
        profile.close_delete_modal().click({force: true})
        profile.delete_pat_modal().should('not.exist')
        profile.button_1(' Delete ').click({force: true})
        cy.wait(1000)
        profile.delete_pat_modal().should('be.visible')
        profile.delete_pat_button().should('be.visible').trigger('mousedown')
        cy.wait(3000)
        profile.delete_pat_button().trigger('mouse.leave')
        profile.no_token_exists().should('be.visible')
    })
})
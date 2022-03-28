import welcome from '../../page_objects/welcome_page'
import profile from '../../page_objects/profile_page'
import 'cypress-file-upload'

describe('functional test', () => {
    beforeEach(function() {
        cy.login()
    })
    it('edit profile', () => {
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        welcome.edit_profile().should('be.visible').click({force: true})
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/user/a3RsOXUQCP0jrJDQc')
        profile.display_name_header().should('be.visible').contains('Kyle Martinez')
        profile.upload_pic().attachFile('profile_pic.jpg')
        profile.avatar().should('have.attr', 'src').should('include', 'data:image')
        profile.username().should('be.visible').should('be.disabled').should("have.value", 'kyle.martinez')
        profile.display_name().should('be.visible').should('have.value', 'Kyle Martinez')
        profile.display_name().clear({force: true}).type('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*+').should('have.value', 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*') //Testing max length of 70 characters
        profile.display_name().clear({force: true}).type('a2@').should('have.value', 'a2@') //a2@ is to represent one of each type input alpha, numeric, and specialty
        profile.display_name_header().scrollIntoView()
        profile.display_name_header().should('be.visible').contains('a2@')
        profile.email_address().should("be.visible").should('have.value','marjan.georgiev+1@swimlane.com')
        profile.email_address().clear({force: true}).type('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*+').should('have.value', 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*') //Testing max length of 70 characters
        profile.email_address().clear({force: true}).type('aaa').trigger('mouseover')
        profile.save_button().click({force: true})
        profile.user_updated().should('not.exist')
        profile.email_address().clear({force: true}).type('elyk17@yahoo.com').should('have.value', 'elyk17@yahoo.com')
        profile.first_name().should('be.visible').should('have.value', 'Kyle')
        profile.first_name().clear({force: true}).type('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*+').should('have.value', 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*') //Testing max length of 70 characters
        profile.first_name().clear({force: true}).type('a2@').should('have.value', 'a2@')
        profile.middle_initial().scrollIntoView()
        profile.middle_initial().should('be.visible').should('have.value', 'G')
        profile.middle_initial().clear({force: true}).type('a2@').should('have.value', 'a') //testing max length of 1
        profile.middle_initial().clear({force: true}).type('a').should('have.value', 'a')
        profile.middle_initial().clear({force: true}).type('2').should('have.value', '2')
        profile.middle_initial().clear({force: true}).type('@').should('have.value', '@')
        profile.last_name().should('be.visible').should('have.value', 'Martinez')
        profile.last_name().clear({force: true}).type('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*+').should('have.value', 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*') //Testing max length of 70 characters
        profile.last_name().clear({force: true}).type('a2@').should('have.value', 'a2@')
        profile.phone_number().should('be.visible').should('have.value', 'admin')
        profile.phone_number().clear({force: true}).type('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*+').should('have.value', 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*') //Testing max length of 70 characters
        profile.phone_number().clear({force: true}).type('7204359473').should('have.value', '7204359473')
        profile.time_zone().should('be.visible').contains('Local Time Zone (America/Denver)')
        profile.time_zone().click({force: true})
        profile.select_time_zone('America/Chicago').click()
        profile.dashboard('Default Dashboard').should('be.visible')
        profile.save_button().click({force: true})
        profile.user_updated().should('be.visible')

        //after saving validating changes stayed the same and then reverting back to original
        profile.display_name_header().scrollIntoView()
        profile.display_name_header().should('be.visible').contains('a2@')
        cy.get('user-avatar').find('img').should('have.attr', 'src').should('include', 'data:image/jpeg')
        profile.username().should('have.value', 'kyle.martinez')
        profile.display_name().should('have.value', 'a2@').clear({force: true}).type('Kyle Martinez').should('have.value', 'Kyle Martinez')
        profile.display_name_header().scrollIntoView()
        profile.display_name_header().should('be.visible').contains('Kyle Martinez')
        profile.email_address().should('have.value', 'elyk17@yahoo.com').clear({force: true}).type('marjan.georgiev+1@swimlane.com').should("have.value", 'marjan.georgiev+1@swimlane.com')
        profile.first_name().should('have.value', 'a2@').clear({force: true}).type('Kyle').should("have.value", 'Kyle')
        profile.middle_initial().should('have.value', '@').clear({force: true}).type('G').should('have.value', 'G')
        profile.last_name().should("have.value", 'a2@').clear({force: true}).type('Martinez').should('have.value', 'Martinez')
        profile.phone_number().should('have.value', '7204359473').clear({force: true}).type('admin').should('have.value', 'admin')
        profile.time_zone().contains('America/Chicago').click({force: true})
        profile.select_time_zone('Local Time Zone (America/Denver)').click()
        profile.time_zone().contains('Local Time Zone (America/Denver)')
        profile.save_button().click({force: true})
        profile.user_updated().should('be.visible')

    })
})
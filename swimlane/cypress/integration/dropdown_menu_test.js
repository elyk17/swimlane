import header from '../../page_objects/header'
import about from '../../page_objects/about'
import profile from '../../page_objects/profile_page'
describe('Functional Test', () => {
    beforeEach(function() {
        cy.login()
    })
    it('logout test', () => {
        cy.wait(1000)
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        header.dropdown_menu().click({force: true})
        header.logout().should('be.visible').click({force: true})
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/logout')
    }),
    it('documentation test', () => {
        cy.wait(1000)
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        header.dropdown_menu().click({force: true})
        header.documentation().should('be.visible').click({force: true})
        cy.wait(3000)
        cy.url('eq', 'https://swimlane.com/knowledge-center/docs/')
        cy.wait(1000)

        //This code closes the secondary window but for some reason it causes any previous code to fail so commenting out. 
        //The popout window is not controlled by cypress so we cannot send commands to handle it from the research I have tested
        // ("#close_page").click(function() {
        //     var confirm_result = confirm("Are you sure you want to quit?");    
        //     if (confirm_result == true) {
        //       window.close();
        //     }
        //   });
    }),
    it('about test', () => {
        cy.wait(1000)
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        header.dropdown_menu().click({force: true})
        header.about().should('exist').click({force: true}) //since I am unable 
        cy.wait(1000)
        about.modal_open().should('exist')
        about.title().should('exist').contains('About Swimlane')
        about.version().should('exist')
        about.build().should('exist')
        about.copyright().should('exist')
        about.close_modal().should('exist').click({force: true})
        about.modal_open().should('not.exist')
    }),
    it('profile test', () => {
        cy.wait(1000)
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        header.dropdown_menu().click({force: true})
        header.about().should('exist').click({force: true})
        about.close_modal().click({force: true})
        header.dropdown_menu().click({force: true})
        header.profile().should('exist').click({force: true})
        profile.general_neader().should('exist')
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/user/a3RsOXUQCP0jrJDQc')
    })
    
})
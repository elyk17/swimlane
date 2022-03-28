import side from '../../page_objects/side_menu'
describe('Functional Test', () => {
    beforeEach(function() {
        cy.login()
    })
    it('side menu test', () => {
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/welcome')
        side.workspaces().should('be.visible').click({force: true})
        side.new_employee_submissions_workspace().should('be.visible').click({force: true})
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/workspace/aTLTrHM1X27l1wiAk/'),
        side.dashboards().should('be.visible').click({force: true})
        side.no_dashboards().should("be.visible")
        side.application_records().should('be.visible').click({force: true})
        side.new_employee_submissions().should('be.visible').click({force: true})
        cy.url('eq', 'https://qa-practical.qa.swimlane.io/search/aF5sqnNFCc36kO9_J/aSiaZ3NU8KWkeJN3E')
        side.reports().should('be.visible').click({force: true})
        side.no_reports().should('be.visible')
    })
})

export default{
    workspaces: () => cy.get('[class="nav-menu"]', {timeout: 10000}).find('ul',{timeout: 10000}).find('[class="nav-item-container ng-star-inserted"]', {timeout: 10000}).find('span').contains('Workspaces').parent(),
    new_employee_submissions_workspace: () => cy.get('[class="sub-nav-item active ng-star-inserted"]', {timeout: 10000}).find('span').contains('New Employee Submissions Workspace'),
    dashboards: () => cy.get('[class="nav-menu"]', {timeout: 10000}).find('[class="nav-item-container ng-star-inserted"]', {timeout: 10000}).find('span').contains('Dashboards').parent(),
    no_dashboards: () => cy.get('nav-filter-list').find('div', {timeout: 10000}).contains('This workspace has no dashboards yet.'),
    application_records: () => cy.get('[class="nav-menu"]', {timeout: 10000}).find('ul',{timeout: 10000}).find('[class="nav-item ng-star-inserted"]').find('span').contains('Application Records').parent(),
    new_employee_submissions: () => cy.get('[href="/search/aF5sqnNFCc36kO9_J/"]', {timeout: 10000}),
    reports:  () => cy.get('[class="nav-menu"]', {timeout: 10000}).find('ul',{timeout: 10000}).find('[class="nav-item ng-star-inserted"]').find('span').contains('Reports').parent(),
    no_reports: () => cy.get('nav-filter-list', {timeout: 10000}).find('div', {timeout: 10000}).contains('This workspace has no reports yet.')
}

export default{
    new_employee_submission_workspace: () => cy.get('ngx-toolbar-title', {timeout: 10000}).find('span', {timeout: 10000}).eq(1).contains(' New Employee Submissions Workspace '),
    no_proper_permission: () => cy.get('ng-component', {timeout: 10000}).find('div', {timeout: 10000}).find('h2', {timeout: 10000}).contains('You don’t have the proper permissions')
}
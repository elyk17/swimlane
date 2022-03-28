
export default{
    modal_open: () => cy.get('about', {timeout: 10000}),
    title: () => cy.get('about', {timeout: 10000}).find('div').find('h1', {timeout: 10000}).contains('About Swimlane'),
    close_modal:  () => cy.get('ngx-dialog', {timeout: 10000}).find('div', {timeout: 10000}).find('div', {timeout: 10000}).find('button', {timeout: 10000}),
    version: () => cy.get('about', {timeout: 10000}).find('div', {timeout: 10000}).find('div', {timeout: 10000}).find('section', {timeout: 10000}).find('div').find('div').contains('Version: 10.5.0'),
    build: () => cy.get('about', {timeout: 10000}).find('div', {timeout: 10000}).find('div', {timeout: 10000}).find('div',{timeout: 10000}).find('div', {timeout: 10000}).eq(1).contains('Build: v6aa0e710'),
    copyright: () => cy.get('about', {timeout: 10000}).find('div', {timeout: 10000}).find('p',{timeout: 10000}).contains('Copyright © 2022 Swimlane INC.')
}
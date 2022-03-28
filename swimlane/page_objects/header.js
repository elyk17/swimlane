export default{
    search_button: () => cy.get('[class="global-search--button"]', {timeout: 10000}),
    dropdown_menu: () => cy.get('user-avatar', {timeout: 10000}).find('[class="avatar-image ng-star-inserted"]'),

    //search modal
    search_field: () => cy.get('ngx-input', {timeout: 10000}).find('div').find('div').find('div').find('div').find('input'),
    minimize_button: () => cy.get('ngx-icon', {timeout: 10000}).eq(0).find('i'),
    maximize_button: () => cy.get('ngx-icon', {timeout: 10000}).eq(1).find('i'),
    close_button: () => cy.get('ngx-icon', {timeout: 10000}).eq(2).find('i'),

    //dropdown menu
    profile: () => cy.get('ngx-dropdown-menu',{timeout: 10000}).find('ul').find('li').eq(0).find('[uisref="user"]'),
    documentation: () => cy.get('ngx-dropdown-menu',{timeout: 10000}).find('ul').find('li').eq(1).find('[class="sub-nav-item"]'),
    about: () => cy.get('ngx-dropdown-menu',{timeout: 10000}).find('ul').find('li').eq(2).find('[class="sub-nav-item"]'),
    logout: () => cy.get('ngx-dropdown-menu',{timeout: 10000}).find('ul').find('li').eq(3).find('div').find('[href="logout"]'),
}
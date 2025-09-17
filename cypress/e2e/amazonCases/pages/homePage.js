class homePage {

    visitHomePage() {
        cy.visit('https://www.amazon.com.tr/');
        return this;
    }

    logo() {
        return cy.get('#nav-logo-sprites');
    }
    menuButton() {
        return cy.get('#nav-hamburger-menu');
    }
    searchBox() {
        return cy.get('#twotabsearchtextbox');
    }

    menuVisible() {
        return cy.get('.hmenu-visible');
    }

    categoryBox() {
        return cy.get('#searchDropdownBox');
    }
}
export default new homePage;
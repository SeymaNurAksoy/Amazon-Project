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
}
export default new homePage;
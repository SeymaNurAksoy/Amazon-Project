import homePage from "./pages/homePage";
import productPage from "./pages/productPage";
const product_page = productPage;
const home_page = homePage;

describe('Ürün Sayfa Kontrolü', () => {
    it('Ürün detay sayfası açılması kontolü', () => {
        homePage.visitHomePage();
        homePage.searchBox().type('samsung{enter}');
        cy.url().should('include', 'k=samsung');
        productPage.productList().first().click();
        productPage.productTitle().should('be.visible');
        productPage.addToCartButton().should('be.visible');

    });

    it('Ürün fiyatının format kontrolü', () => {
        homePage.visitHomePage();
        homePage.searchBox().type('samsung{enter}');
        cy.url().should('include', 'k=samsung');
        productPage.productList().first().click();
        productPage.priceFormat().should('be.visible').should('contain.text', 'TL');
    });

    it.only('Ürün görselinin yüklenme kontrolü', () => {
        homePage.visitHomePage();
        homePage.searchBox().type('samsung{enter}');
        cy.url().should('include', 'k=samsung');
        productPage.productList().first().click();
        productPage.productImage().should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });


    });

});
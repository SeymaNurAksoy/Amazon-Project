import homePage from "./pages/homePage";
import searchPage from "./pages/searchPage";
const search_page =  searchPage;
const home_page =  homePage;
describe('Arama Kontrolü', () => {

    it('Ürün Arama', () => {
        homePage.visitHomePage();
        homePage.searchBox().type('iphone{enter}');
        cy.url().should('include','k=iphone');
        searchPage.searhText().should('contain.text','iphone');
    });

    it('Olmayan bir ürün arama', () => {
        homePage.visitHomePage();
        homePage.searchBox().type('llllllll{enter}');
        cy.url().should('include','k=llllllll');
        searchPage.searchFailText().should('contain.text','llllllll');
        searchPage.searchFailDesc().should('contain.text','Yazım hatalarını kontrol edin veya daha genel terimler kullanın');
    });

    it('Kategori seçerek ürün arama', () => {
        homePage.visitHomePage();
        homePage.categoryBox().select('Bilgisayarlar');
        homePage.searchBox().type('msi{enter}');
        cy.url().should('include','k=msi');
        searchPage.searhText().should('contain.text','msi');
    });

    it.only('Bir sonraki sayfaya geçiş', () => {
        homePage.visitHomePage();
        homePage.searchBox().type('samsung{enter}');
        cy.url().should('include','k=samsung');
        searchPage.searhText().should('contain.text','samsung');
        searchPage.nextPageButton().click();
        cy.url().should('include','page=2');
    });
    
});
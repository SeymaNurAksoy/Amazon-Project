import homePage from "./pages/homePage";
const home_page =  homePage;
describe('Anasayfa Kontrolleri', () => {
    it('Anasayfa yüklenmesi', () => {
    
        homePage.visitHomePage();
        cy.url().should('include','amazon.com.tr');
        cy.title().should('eq','Amazon.com.tr: Elektronik, bilgisayar, akıllı telefon, kitap, oyuncak, yapı market, ev, mutfak, oyun konsolları ürünleri ve daha fazlası için internet alışveriş sitesi');
    
    });

    it('Logo,menü butonları ve arama çubuğu kontrolü', () => {

        homePage.visitHomePage();
        homePage.logo().should('be.visible');
        homePage.menuButton().should('be.visible');
        homePage.searchBox().should('be.visible');
    
    });

    it.only('Kategori menüsüne tıklanması', () => {

        homePage.visitHomePage();
        homePage.menuButton().click();
        homePage.menuVisible().should('be.visible');  

});

});
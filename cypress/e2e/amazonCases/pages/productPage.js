class productPage{
    productList(){
       return cy.get('.s-main-slot .s-result-item[data-asin]').should('be.visible');
 

    }
    productTitle(){
        return cy.get('[data-testid="product-showcase-title"]');
    }
    addToCartButton(){
        return cy.get('[data-testid="add-to-cart"] > .Button__button__b_aG7');
    }
    cartConfirmation(){
        return cy.get('#attach-accessory-cart-subtotal');
    }
    cartButton(){
        return cy.get('#nav-cart-count');
    }
    cartTotal(){
        return cy.get('.sc-subtotal .sc-price');
    }
    priceFormat(){
        return cy.get('.Price__currency__QSapR');
    }

    productImage(){
        return cy.get('.ImageVideoCarousel__image__KnnTC');
    }

}
export default new productPage();
class searhPage{

    searhText(){
        return cy.get('.a-color-state.a-text-bold');
    }

    searchFailText(){
        return cy.get('h2 > :nth-child(1)');
    }

    searchFailDesc(){
        return cy.get('.a-row.a-color-base > span');
    }

    nextPageButton(){
        return cy.get('.s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-separator');
    }
}
export default new searhPage();

const DefaultPage = require('../pageobjects/default.page');
const SearchPage = require('../pageobjects/search.page');

// describe('Default page Search test for part #9888RGS', () => {
//     it('should return the product page for a BrakeBest Select Brake Rotor', () =>{
//         DefaultPage.open();

//         DefaultPage.enterSearchText("9888RGS");
//         DefaultPage.clickSearch();
//         expect(SearchPage.contents).toHaveTextContaining('BrakeBest Select Brake Rotor');
//         //expect(DefaultPage.contents).toHaveTextContaining('BrakeBest Select Brake Rotor');
//     });
// });

describe('Direct Search test for part #9888RGS', () => {
    it('should return the product page for a BrakeBest Select Brake Rotor', () =>{
        SearchPage.open('9888RGS');

        expect(SearchPage.contents).toHaveTextContaining('BrakeBest Select Brake Rotor');
    
    });
});
const DefaultPage = require('../pageobjects/default.page');
const SearchPage = require('../pageobjects/search.page');

describe('Direct Search test for part #9888RGS', () => {
    it('should return the product page for a BrakeBest Select Brake Rotor', () =>{
        SearchPage.open('9888RGS');

        expect(SearchPage.contents).toHaveTextContaining('BrakeBest Select Brake Rotor');
    
    });
});
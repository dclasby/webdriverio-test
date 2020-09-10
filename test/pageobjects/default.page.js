//import Page from './page';
const Page = require('./page');

class DefaultPage extends Page {
    //-----------------------------------------
    // Gets
    get searchForm()
    {
        return $('form');
    }

    get searchInput() {
    //    return this.searchForm.$('#form-control.header-search__input.js-site-search-input');
        return this.searchForm.$('#header-search-input');
    }

    get searchButton()
    {
        return this.searchForm.$('.header-search__icon-button.header-search__icon-button--submit-desktop');
    }

    // get contents()
    // {
    //     return $('*', 'body');
    // }

    //-----------------------------------------
    // Functions

    enterSearchText(searchtext)
    {
        this.searchInput.setValue(searchtext);
    }

    clickSearch()
    {
        this.searchButton.click();
    }

    open()
    {
        return super.open('');
    }

    search(searchtext)
    {
        this.enterSearchText(searchtext);
        this.clickSearch();
    }
}

//export default new DefaultPage();
module.exports = new DefaultPage();


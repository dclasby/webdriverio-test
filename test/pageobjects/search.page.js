//import Page from './page';
const Page = require('./page');

class SearchPage extends Page {
    //-----------------------------------------
    // Gets

    get contents()
    {
        return $('*', 'body');
    }

    //-----------------------------------------
    // Functions

    // open()
    // {
    //     super.open('search');
    // }

    open(itemquery)
    {
        super.open('search?q=' + itemquery);
    }

    findTextElement(containing)
    {
        return $('div:contains("'+containing+'")');
    }

}

//export default new SearchPage();
module.exports = new SearchPage();
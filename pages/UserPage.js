import {Selector, t} from 'testcafe';

class LoginPage{

    constructor(){
        this.plusButton = Selector('summary.Header-link');
        this.newReppositoryButton = Selector('a.dropdown-item').withText('New repository');
    }

    async clickOnNewReppositoryButton(){
        await t
            .click(this.plusButton)
            .click(this.newReppositoryButton)
    }
}
export default new LoginPage();
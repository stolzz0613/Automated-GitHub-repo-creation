import {Selector, t} from 'testcafe';

class LoginPage{

    constructor(){
        this.siginForm = Selector('form');
        this.userNameInput = Selector('input#login_field');
        this.passwordInput = Selector('input#password');
        this.loginBtn = Selector('input.btn.btn-primary');
    }
 
    async setUserName(userName){
        await t
        .typeText(this.userNameInput, userName)
    }

    async setPassword(password){
        await t
        .typeText(this.passwordInput, password)
    }

    async clickOnLoginBtn(){
        await t
        .click(this.loginBtn)
        .wait(3000)
    }
}
export default new LoginPage();
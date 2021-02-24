import {ClientFunction} from 'testcafe';
import {generateName} from '../utils/name';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import NewRepoPage from '../pages/NewRepoPage';

const url = 'https://github.com/login';
const getPageHref = ClientFunction(() => document.location.href.toString());

fixture('Create Repo')
    .page(url)

test
    .before(async t => {
        await t
            .expect(await getPageHref()).eql('https://github.com/login', 'The page is valid');
        await t
            .expect(LoginPage.siginForm.exists).ok()
            .expect(LoginPage.siginForm.getAttribute('method')).eql('post', 'form method valid')
            .expect(LoginPage.siginForm.getAttribute('action')).eql('/session', 'form action valid')
            .catch((reason) => {
                console.error(reason.type);
            });
        await t
            .expect(LoginPage.userNameInput.exists).ok()
            .expect(LoginPage.userNameInput.getAttribute('type')).eql('text', 'input type valid')
            .expect(LoginPage.userNameInput.value).eql('', 'username input is empty', { timeout: 500 })
            .expect(LoginPage.passwordInput.exists).ok()
            .expect(LoginPage.passwordInput.getAttribute('type')).eql('password', 'input type valid')
            .expect(LoginPage.passwordInput.value).eql('', 'password input is empty', { timeout: 500 })
            .catch((reason) => {
                console.error(reason.type);
            });
    })
    ('Create repo', async t => {
        var userName = process.env.USER_NAME_GIT;
        var password = process.env.PASSWORD_GIT;
        var repoName = generateName();

        LoginPage.setUserName(userName);
        LoginPage.setPassword(password);

        await LoginPage.clickOnLoginBtn();

        await t.expect(await getPageHref()).eql('https://github.com/', 'The page is valid')

        await UserPage.clickOnNewReppositoryButton();

        await t.expect(await getPageHref()).eql('https://github.com/new', 'The page is valid')

        await NewRepoPage.setRepoName(repoName);

        await t.expect(await NewRepoPage.createRepoButton.hasAttribute('disabled')).notOk()
            .click(NewRepoPage.createRepoButton);

        await t
            .expect(await getPageHref())
            .eql('https://github.com/'+ process.env.USER_NAME_GIT +'/'+ repoName, 'The page is valid')
            .wait(10000);
    })
    .after( async t => {});

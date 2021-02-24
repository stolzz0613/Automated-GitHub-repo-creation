import {Selector, t} from 'testcafe';

class NewRepoPage{

    constructor(){
        this.repositoryName = Selector('input#repository_name');
        this.createRepoButton = Selector('button.btn').withText('Create repository');
    }

    async setRepoName(name){
        await t
            .typeText(this.repositoryName, name)
            .wait(3000);
    }
}
export default new NewRepoPage();
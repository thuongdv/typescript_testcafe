import {Selector, t} from "testcafe";

class HomePage {
    private lnkRegister = Selector("a[href^='register.htm']");
    
    public async goToRegisterPage() {
        await t.click(this.lnkRegister);
    }
}

export default new HomePage();
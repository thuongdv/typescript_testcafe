import { Selector, t } from "testcafe";
import { ControlUtil } from "../utils/control_util";
import SelectorX from '../utils/xpath_selector';

class HomePage {
    private readonly lnkRegister = Selector("a[href^='register.htm']");
    private readonly txtUsername = SelectorX('//input[@name="username"]');
    private readonly txtPassword = SelectorX('//input[@name="password"]');
    private readonly btnLogin = SelectorX('//input[@value="Log In"]');

    public async goToRegisterPage() {
        await ControlUtil.waitForControlVisible(this.lnkRegister);
        await t.click(this.lnkRegister);
    }

    public async login(username: string, password: string) {
        await t
        .typeText(this.txtUsername, username)
        .typeText(this.txtPassword, password)
        .click(this.btnLogin);
    }
}

export default new HomePage();
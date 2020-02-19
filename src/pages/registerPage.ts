import {Selector, t} from "testcafe";
import {CommonPage} from "./commonPage";

class RegisterPage extends CommonPage {
    private txtFirstName = Selector("input[id='customer.firstName']");
    private txtLastName = Selector("input[id='customer.lastName']");
    private btnRegister = Selector("input[type='submit'][value='Register']");

    public async register(accountInfo = this.getDefaultAccountInfo()) {
        await t.typeText(this.txtFirstName, accountInfo["firstName"].toString());
        await t.typeText(this.txtLastName, accountInfo["lastName"].toString());
        await t.click(this.btnRegister);

        return accountInfo;
    }

    public async verifyCannotResister() {
        await t.expect(this.errors.count).gt(0, "The error messages do not show.");
    }

    private getDefaultAccountInfo(): {[key: string]: string | number} {
        const accInfo: {[key: string]: string | number} = {
            "firstName": "test",
            "lastName": "test"
        }

        return accInfo;
    }
}

export default new RegisterPage();
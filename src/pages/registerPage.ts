import {Selector, t} from "testcafe";
import {CommonPage, KeyValue} from "./common_page";
import { DateTimeUtil } from "../utils/date_time_util";
import { NumberUtil } from "../utils/number_util";

class RegisterPage extends CommonPage {
    private readonly txtFirstName = Selector("input[id='customer.firstName']");
    private readonly txtLastName = Selector("input[id='customer.lastName']");
    private readonly txtAddress = Selector("input[id='customer.address.street']");
    private readonly txtCity = Selector("input[id='customer.address.city']");
    private readonly txtState = Selector("input[id='customer.address.state']");
    private readonly txtZipCode = Selector("input[id='customer.address.zipCode']");
    private readonly txtPhone = Selector("input[id='customer.phoneNumber']");
    private readonly txtSSN = Selector("input[id='customer.ssn']");
    private readonly txtUsername = Selector("input[id='customer.username']");
    private readonly txtPassword = Selector("input[id='customer.password']");
    private readonly txtRepeatPassword = Selector("#repeatedPassword");
    private readonly btnRegister = Selector("input[type='submit'][value='Register']");

    public async register(accountInfo = this.getDefaultAccountInfo()) {
        await this.enterIfHasKey(accountInfo, "firstName", this.txtFirstName);
        await this.enterIfHasKey(accountInfo, "lastName", this.txtLastName);
        await this.enterIfHasKey(accountInfo, "address", this.txtAddress);
        await this.enterIfHasKey(accountInfo, "city", this.txtCity);
        await this.enterIfHasKey(accountInfo, "state", this.txtState);
        await this.enterIfHasKey(accountInfo, "zipCode", this.txtZipCode);
        await this.enterIfHasKey(accountInfo, "phone", this.txtPhone);
        await this.enterIfHasKey(accountInfo, "ssn", this.txtSSN);
        await this.enterIfHasKey(accountInfo, "username", this.txtUsername);
        await this.enterIfHasKey(accountInfo, "password", this.txtPassword);
        await this.enterIfHasKey(accountInfo, "password", this.txtRepeatPassword);
        await t.click(this.btnRegister);

        return accountInfo;
    }

    public async verifyCannotResister() {
        await t.expect(this.lblErrors.count).gt(0, "The error messages do not show.");
        //TODO: add more verify points stat
    }

    public async verifyResisterSuccessfully(accInfo: KeyValue) {
        await this.verifyWelcome(`Welcome ${accInfo["firstName"]} ${accInfo["lastName"]}`);
    }

    private getDefaultAccountInfo(): KeyValue {
        const currentTime = DateTimeUtil.current("YYYY_MM_DDTHH_mm_ss");
        const accInfo: KeyValue = {
            "firstName": "test",
            "lastName": "test",
            "address": "address",
            "city": "city",
            "state": "state",
            "zipCode": "55555",
            "phone": "0123456789",
            "ssn": NumberUtil.getNumberOf(9).toString(),
            "username": currentTime,
            "password": "test"
        }

        return accInfo;
    }
}

export default new RegisterPage();
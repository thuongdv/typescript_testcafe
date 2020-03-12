import {Selector, t} from "testcafe";

export interface KeyValue {
    [key: string]: string
}

export class CommonPage {
    protected readonly lblErrors = Selector("[class='error']");
    protected readonly lblWelcome = Selector("#leftPanel p.smallText");

    protected async verifyWelcome(who: string) {
        await t.expect(await this.lblWelcome.innerText).eql(who);
    }

    protected async enterIfHasKey(arr: KeyValue, key: string, selector: Selector) {
        if (arr[key] === undefined) return;

        await t.typeText(selector, arr[key]);
    }
}
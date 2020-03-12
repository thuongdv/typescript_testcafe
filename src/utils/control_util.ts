import { t } from 'testcafe';
import { Stopwatch } from 'ts-stopwatch';

export class ControlUtil {
    /**
     * Wait for control to be visible
     * @param selector Selector
     * @param timeout number
     */
    public static async waitForControlVisible(selector: Selector, timeout: number = 10) {
        let sw = new Stopwatch();
        timeout = timeout * 1000;
        sw.start();
        while (!selector.visible && sw.getTime() < timeout) {
            await t.wait(200);
        }
        sw.stop();
    }
}

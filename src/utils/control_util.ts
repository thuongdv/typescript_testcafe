import { t, ClientFunction } from 'testcafe';
import { Stopwatch } from 'ts-stopwatch';

export class ControlUtil {
    /**
     * Wait for control to be visible
     * @param selector Selector
     * @param timeout number in seconds
     */
    public static async waitForControlVisible(selector: Selector, timeout: number = 10) {
        let sw = new Stopwatch();
        timeout = timeout * 1000;
        sw.start();
        while (!(await selector.visible) && sw.getTime() < timeout) {
            await t.wait(100);
        }
        sw.stop();
    }

    /**
     * Wait for ajax loading complete
     * @param timeout number in seconds
     */
    public static async waitForAjax(timeout: number = 10) {
        let sw = new Stopwatch();
        timeout = timeout * 1000;
        sw.start();
        const pageReadyFn = ClientFunction(() => ($ as any).active == 0);
        while (!(await pageReadyFn()) && sw.getTime() < timeout) {
            await t.wait(100);
        }
        sw.stop();
    }

    /**
     * Wait for page load complete
     * @param timeout number in seconds
     */
    public static async waitForPageReady(timeout: number = 10) {
        let sw = new Stopwatch();
        timeout = timeout * 1000;
        sw.start();
        const pageReadyFn = ClientFunction(() => document.readyState === 'complete');
        while (!(await pageReadyFn()) && sw.getTime() < timeout) {
            await t.wait(100);
        }
        sw.stop();
    }
}

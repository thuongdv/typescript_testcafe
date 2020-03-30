import { t, ClientFunction } from 'testcafe';
import { Stopwatch } from 'ts-stopwatch';
import angular from "angular";

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
    static async waitForAjaxReady(timeout = 10) {
        let sw = new Stopwatch();
        timeout = timeout * 1000;
        sw.start();
        let startTime = sw.getTime();

        const pageReady = ClientFunction(() => ($ as any).active == 0);
        let ready = await pageReady();
        while (!ready && sw.getTime() < timeout) {
            await t.wait(100);
            ready = await pageReady();
        }
        sw.stop();

        if (sw.getTime() > timeout) {
            console.log(`Ajax was not completed in expected time(${timeout}).`);
        } else {
            console.log(`Ajax loaded completely in ${sw.getTime() - startTime} milliseconds.`);
        }
    }

    /**
     * Wait for page load complete
     * @param timeout number in seconds
     */
    static async waitForPageReady(timeout = 10) {
        let sw = new Stopwatch();
        timeout = timeout * 1000;
        sw.start();
        let startTime = sw.getTime();

        const pageReadyFn = ClientFunction(() => document.readyState === 'complete');
        while (!(await pageReadyFn()) && sw.getTime() < timeout) {
            await t.wait(100);
        }
        sw.stop();

        if (sw.getTime() > timeout) {
            console.log(`Page was not loaded in expected time(${timeout}).`);
        } else {
            console.log(`Page loaded completely in ${sw.getTime() - startTime} milliseconds.`);
        }
    }
	
	/**
     * Wait for angular loading complete
     * @param timeout number in seconds
     */
    static async waitForAngularReady(timeout = 10) {
        let sw = new Stopwatch();
        timeout = timeout * 1000;
        sw.start();
        let startTime = sw.getTime();

        const pageReadyFn = ClientFunction(() =>  angular.element(document).injector().get('$http').pendingRequests.length === 0);
        while (!(await pageReadyFn()) && sw.getTime() < timeout) {
            await t.wait(100);
        }
        sw.stop();

        if (sw.getTime() > timeout) {
            console.log(`Angular was not completed in expected time(${timeout}).`);
        } else {
            console.log(`Angular loaded completely in ${sw.getTime() - startTime} milliseconds.`);
        }
    }
}

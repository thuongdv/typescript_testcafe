import homePage from "../pages/home_page";
import registerPage from "../pages/registerPage";

fixture(`Getting Started`)
    .page(`https://parabank.parasoft.com/parabank/index.htm`);

test('TC1: User can register successfully', async () => {
    //await testcafe.report("1. Go to register page");
    await homePage.goToRegisterPage();

    //await testcafe.report("2. Register new account");
    const accInfo = await registerPage.register();

    //await testcafe.report("VP: Register successfully");
    await registerPage.verifyResisterSuccessfully(accInfo);
});

test('TC2: User cannot register without require fields', async () => {
    const accInfo = {};

    await homePage.goToRegisterPage();
    await registerPage.register(accInfo);
    await registerPage.verifyCannotResister();
});
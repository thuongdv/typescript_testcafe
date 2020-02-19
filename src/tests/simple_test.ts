import homePage from "../pages/homePage";
import registerPage from "../pages/registerPage";

fixture `Getting Started`
    .page `https://parabank.parasoft.com/parabank/index.htm`;

test('TC: User cannot register without require fields', async t => {
    await homePage.goToRegisterPage();
    await registerPage.register();
    await registerPage.verifyCannotResister();
});
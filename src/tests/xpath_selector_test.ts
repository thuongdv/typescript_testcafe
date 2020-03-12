import homePage from "../pages/home_page";

fixture`Use XPath`
    .page`https://parabank.parasoft.com/parabank/index.htm`;

test('Test login with xpath', async () => {
    await homePage.login('test', 'test');
});
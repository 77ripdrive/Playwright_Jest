const { MainPage } = require('../pages/mainPage')
var config = require("../data/config")
let page;
jest.setTimeout(40 * 1000)

describe('Actions at mainPage', () => {

    beforeAll(async() => {
        console.log("headless : " + config.webHeadless)
        page = await browser.newPage();
        const mainPage = new MainPage(page);
        await mainPage.navigate();
        console.log("BaseUrl : " + config.webBaseUrl)

    });

    it('should be  "todos"', async() => {
        await expect(page).toEqualText('h1', "todos")
        await page.screenshot({ path: 'screenshots/actions.png' });
    });

    afterAll(async() => {
        await browser.close();
    })
})
const {test,expect} =require("@playwright/test")

const path="screenshot/screenshot.png"

test("Login test", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();

await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/dashboard/);

  await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li').click();

    await page.getByText("Logout").click();
    
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/login/);
    
     
    await page.screenshot({path: "screenshot.png"});
})
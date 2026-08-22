const {test,expect} =require("@playwright/test")

test("Error message test", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").type("Admin");
    await page.getByPlaceholder("Password").type("wrongpassword");
    await page.getByRole("button", { name: "Login" }).click();

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();

    console.log("Error message:", errorMessage);

    expect(errorMessage.includes("Invalid")).toBeTruthy();
    expect(errorMessage==="Invalid credentials").toBeTruthy();

})

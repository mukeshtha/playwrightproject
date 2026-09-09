const{test, expect} = require('@playwright/test');

test.only('Form Registeration', async ({browser}) => {

     const context = await browser.newContext();
    const page = await context.newPage(); 
    
    const firstName=page.locator("#firstName");
    const lastName=page.locator("#lastName");
    const userEmail=page.locator("#userEmail");
    const userMobile=page.locator("#userMobile");
    const userPassword=page.locator("#userPassword");
    const confirmPassword=page.locator("#confirmPassword");
    const registerBtn=page.locator("#login");
    const signInBtn=page.locator("#login");

   
    await page.goto("https://rahulshettyacademy.com/client/#/auth/register"); 
    console.log(await page.title());  

    //insert username and password and click on sign in button
    await firstName.fill("manoj");
    await lastName.fill("kumar");
    await userEmail.fill("manojkumar@example.com");
    await userMobile.fill("1234567890");
    await userPassword.fill("password123");
    await confirmPassword.fill("password123");
    await registerBtn.click();

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await userEmail.fill("manojkumar@example.com");
await userPassword.fill("password123");
await signInBtn.click();        

});
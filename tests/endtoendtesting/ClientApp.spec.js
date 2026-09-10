const{test, expect} = require('@playwright/test');

test.only('Login Page', async ({browser}) => {

     const context = await browser.newContext();
    const page = await context.newPage(); 
    
    
    const userEmail=page.locator("#userEmail");
    const userPassword=page.locator("#userPassword");
    const signInBtn=page.locator("#login");
    const products=page.locator(".card-body");
    const productName="ZARA COAT 3"; 

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await userEmail.fill("anshika@gmail.com");
await userPassword.fill("Iamking@000");
await signInBtn.click(); 

await page.waitForLoadState('networkidle');
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);

const count=await products.count();
for(let i=0;i<count;i++)
{
    if(await products.nth(i).locator("b").textContent()===productName)
    {
        await products.nth(i).locator("text=  Add To Cart").click();
        break;
        }
    }

    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    console.log(bool); 
    expect(bool).toBeTruthy();
});

const{test,expect}=require('@playwright/test');

test('Browser Context Playwright test', async ({browser}) => {

     const context = await browser.newContext();
    const page = await context.newPage(); 
    
    const userName=page.locator("#username");
    const password=page.locator("[type='password']");
    const signInBtn=page.locator("#signInBtn");
     
    const cardTitles=page.locator(".card-body a");
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
    console.log(await page.title());  

    //insert username and password and click on sign in button
    /*await userName.fill("rahulshetty");
    await password.fill("learning");
    await signInBtn.click();

    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText("Incorrect");*/

      await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signInBtn.click();

    await cardTitles.first().waitFor();
   
   // console.log(await cardTitles.first().textContent());
    //console.log(await cardTitles.nth(1).textContent());

    const allTitles=await cardTitles.allTextContents();
    console.log(allTitles);
    

});

test.only('UI Controls', async ({page}) => {

      await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 

 const userName=page.locator("#username");
    const password=page.locator("[type='password']");
    const signInBtn=page.locator("#signInBtn");
 const dropdown=page.locator("select.form-control");

        await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await dropdown.selectOption("consult");
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await signInBtn.click();
});
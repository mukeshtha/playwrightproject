const {test, expect}=require('@playwright/test') 

test('my first test', async ({page}) => {
 expect(10).toBe(10)
})

test('my second test', async ({page}) => {
 expect(20).toBe(20)
})

test('my third test', async ({page}) => {
 expect(30).toBe(30)
})
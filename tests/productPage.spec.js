import {test,expect} from '@playwright/test'
import { basePage } from '../pages/basePage.js';
import { LoginPage } from '../pages/loginPage.js';
import { productPage } from '../pages/productPage.js';
import { CartPage } from '../pages/cartPage.js';
import { checkoutPage } from '../pages/checkoutPage.js';

test('End to end flow',async({page})=>{


    const loginPage=new LoginPage(page);
    await loginPage.goto('https://www.saucedemo.com/')
    await loginPage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL(/inventory/);


    //product page
    const productpage=new productPage(page)
    // await productpage.displayed();
    await productpage.sortProducts('lohi');
    await productpage.addproducttocart();
    await productpage.cartopen();
    console.log('Add to cart',
        await page.locator('.inventory_item_name').allTextContents());
    await productpage.cartopen();
     console.log('product price',
        await page.locator('.inventory_item_price').allTextContents());
    
    


    //cart page
    const cartpage=new CartPage(page)
    await cartpage.productcount();
    await cartpage.isproductcount();
    await cartpage.productnamevisible();
    await cartpage.productpricevisible();
    await cartpage.checkoutproduct();

    //checkout page
    const checkoutpage=new checkoutPage(page)
    await checkoutpage.checkoutdetails('sam','ram','123')
    await checkoutpage.continuebuttonclick();
})
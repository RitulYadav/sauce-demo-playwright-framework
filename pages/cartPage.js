import {test,expect} from '@playwright/test'
import { basePage } from "./basePage";
export class CartPage extends basePage{
    constructor(page){
        super(page);
        this.itemcount=page.locator('.inventory_item_name')
        this.productname1=page.locator('.inventory_item_name').filter({hasText:'Sauce Labs Onesie'})
         this.productname2=page.locator('.inventory_item_name').filter({hasText:'Sauce Labs Bike Light'})
         this.productprice1=page.locator('.inventory_item_price').filter({hasText:'7.99'})     
         this.productprice2=page.locator('.inventory_item_price').filter({hasText:'9.99'}) 
         this.checkoutbutton=page.getByRole('button',{name:'checkout'}) ;  
    }
    async productcount(){
     return await this.itemcount.count();
    };
    async isproductcount(){
        await expect(this.itemcount).toHaveCount(2);
    }
    async productnamevisible(){
        await expect(this.productname1).toBeVisible();
        await expect(this.productname2).toBeVisible();
    }
    async productpricevisible(){
        await expect(this.productprice1).toBeVisible();
        await expect(this.productprice2).toBeVisible();
    }
    async checkoutproduct(){
        await this.checkoutbutton.click();
    }
    
}
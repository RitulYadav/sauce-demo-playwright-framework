import { basePage } from "./basePage";
export class productPage extends basePage{
    constructor(page){
        super(page);
        this.title=page.getByText('Swag Labs')
        this.selectcontainer=page.locator('.product_sort_container')
        this.opencart=page.locator('.shopping_cart_link')
    }
    // async displayed(){
    //     await expect (this.title).isVisible();
    // };
    async sortProducts(Value){
        await this.selectcontainer.click();
       await this.selectcontainer.selectOption(Value)

    }
    async addproducttocart(){
        const products=await this.page.locator('.inventory_item')
        await products.nth(0).getByRole('button',{name:'Add to cart'}).click();
        await products.nth(1).getByRole('button',{name:'Add to cart'}).click();
    }
    async cartopen(){        
        await this.opencart.click();
    
    }
}
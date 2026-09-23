import { basePage } from "./basePage";
export class checkoutPage extends basePage{
    constructor(page){
        super(page);
        this.firstnameInput=page.getByPlaceholder('First Name');
        this.lastnameInput=page.getByPlaceholder('Last Name');
        this.zipcodeInput=page.getByPlaceholder('Zip/Postal Code');
        this.continuebutton=page.locator('#continue')
    }
    async checkoutdetails(firstname,lastname,zipcode){
      await  this.firstnameInput.fill(firstname)
      await  this.lastnameInput.fill(lastname)
      await  this.zipcodeInput.fill(zipcode)
        }
    async continuebuttonclick(){
        await this.continuebutton.click();
    }
}
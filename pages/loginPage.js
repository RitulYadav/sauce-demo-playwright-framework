import { basePage } from "./basePage";
export class LoginPage extends basePage{
    constructor(page){
        super(page);
         this.usernameInput=page.getByPlaceholder('Username')
        this.passwordInput=page.getByPlaceholder('Password')
        this.loginButton=page.locator('#login-button')
    }
    async login(username,password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click();
    }

}
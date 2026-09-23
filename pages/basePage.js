export class basePage{
    constructor(page){
        this.page=page
    }
    async goto(path){
        await this.page.goto(path)
    }
    async click(locator){
        await locator.waitFor({state:'visible'})
        await locator.click();
    }
    async fill(locator,text){
        await locator.waitFor({state:'visible'})
        await locator.fill(text);
    }
    async getText(locator){
        await locator.waitFor({state:'visible'})
         return await locator.textContent();
    }
    async isVisible(locator){
        try{return await locator.isVisible()}
        catch(e){
            return false;
        }
    }
}
exports.forgotpasswordpage=
class forgotpasswordpage{
    page:any
    forgotPassword: string;
     emaiId: string;
     resetPassword: string;


    
    constructor(page: any) {
      this.page = page;
      this.forgotPassword="//a[normalize-space()='Forgot Password?']"
      this.emaiId="#Email"
      this.resetPassword="//span[@class='ng-star-inserted']"



     }

     async gotoforgotPasswordPage()
     {
          await this.page.locator(this.forgotPassword).click();
          await this.page.waitForTimeout(2000)
          await this.page.locator(this.emaiId).fill("sidharathkumar976@gmail.com");
          await this.page.waitForTimeout(2000)
          await this.page.locator(this.resetPassword).click()
     }

}
exports.landingPage =
class landingPage{

    page:any;
    blackcolor: string;
    nextbutton: string;
    company: string;
    Company_Next: string;
    company_Name: string;
  next_Button_Company_Name: string;
  single_Entity: string;
  industry_Type: string;
  industry_Type_Next_Button: string;
  team_size_button: string;
  team_size_Next_Button: string;
  Logo_Next_Button: string;
  account_Button: string;
  accounting_Next_Button: string;
  start_free_Buttton: string;
  start_free_Next_Button: string;
  name: string;
  card_Number: string;
  expiration_Date: string;
  security_Code: string;
  zip_Code: string;
  setDefaultCheckbox: string;
  add_Button: string;
  add_Next_Button: string;
  single_Entity_Next_Button: string;

      constructor(page: any) {
      this.page = page;
      this.blackcolor="//span[contains(text(),'Black')]"
      this.nextbutton="//span[@class='label']"
      this.company="//span[contains(text(),'Company')]"
      this.Company_Next="//span[contains(text(),'Next')]"
      this.company_Name="#Company-Name"
      this.next_Button_Company_Name="//span[contains(text(),'Next')]"
      this.single_Entity="//span[contains(text(),'Single Entity')]"
      this.single_Entity_Next_Button="//span[contains(text(),'Next')]"
      this.industry_Type="//span[contains(text(),'Industry A1')]"
      this.industry_Type_Next_Button="//span[contains(text(),'Next')]"
      this.team_size_button="//span[contains(text(),'5 - 10')]"
      this.team_size_Next_Button="//span[contains(text(),'Next')]"
      this.Logo_Next_Button="//span[contains(text(),'Next')]"
      this.account_Button="//span[contains(text(),'Accounting')]"
      this.accounting_Next_Button="//span[contains(text(),'Next')]"
      this.start_free_Buttton="//span[contains(text(),'Start Free')]"
      this.start_free_Next_Button="//span[contains(text(),'Next')]"
      this.name="#Name"
      this.card_Number="#Card-Number"
      this.expiration_Date="#Expiration"
      this.security_Code="#Security-Code"
      this.zip_Code="#Zip-Code"
      this.setDefaultCheckbox="#mat-mdc-checkbox-1-input"
      this.add_Button="//span[contains(text(),'+ Add')]"
      this.add_Next_Button="//span[contains(text(),'Next')]"


      }

       async gotoLandingPage() {
      await this.page.waitForTimeout(2000)
      await this.page.locator(this.blackcolor).click();
          await this.page.waitForTimeout(2000)
      await this.page.locator(this.nextbutton).click();
     await this.page.locator(this.company).click();

      await this.page.locator(this.Company_Next).click();
         
       await this.page.locator(this.company_Name).fill("arbo")
              
       await this.page.locator(this.next_Button_Company_Name).click();
        
       await this.page.locator(this.single_Entity).click();
        await this.page.locator(this.single_Entity_Next_Button).click();
      await this.page.waitForTimeout(2000);
     await this.page.locator(this.industry_Type).click();
     await this.page.locator(this.industry_Type_Next_Button).click();
     await this.page.locator(this.team_size_button).click();
      await this.page.locator(this.team_size_Next_Button).click();
      await this.page.locator(this.Logo_Next_Button).click();




     await this.page.locator(this.account_Button).click();

   //   await this.page.locator(this.accounting_Next_Button).click();
    //  await this.page.locator(this.start_free_Buttton).click();
//



   //   await this.page.locator(this.start_free_Next_Button).click();
      
      // await this.page.locator(this.name).fill("sidharath")
      // await this.page.locator(this.card_Number).fill("4242424242424242")
      // await this.page.locator(this.expiration_Date).fill("08/2027")
      // await this.page.locator(this.security_Code).fill("CVV1")
      // await this.page.locator(this.zip_Code).fill("12200")
      // await this.page.locator(this.setDefaultCheckbox).check();
    //  await this.page.locator(this.add_Button).click();
    //   await this.page.locator(this.add_Next_Button).click();

      
     


           
       }
}
exports.signuppage =
    class signuppage {
        page: any;
        register: string;
        first_Name: string;
        last_Name: string;
        email_Id: string;
        password: string;
        confirm_password: string;
        continue_Button: string;
        continue_Otp_Button: string;
        back_To_Login_Button: string;
        email_Address: string;

        //arbo website signup Process
        signUpButton: string;
        email_Txt: string;
        accept_Checkbox: string;
        agree_Checkbox: string;
        signUp: string;
        


              //website another

        // usernamefield: string;
        // emailfield: string;
        // signupButton:string
        // gender:string
        // password:string
        // days:string
        // months:string
        // years:string
        // newsLatterCheckBox:string
        // receiveEmailCheckBox:string
        // First_Name:string
        // Last_Name:string
        // company_Name:string
        // company_address:string
        // address:string
        // country:string
        // state:string
        // city:string
        // zipCode:string
        // mobileNumber:string
        // createAccount:string
        // continue:string
        // logout:string
        


        constructor(page: any) {
            this.page = page;
            // this.usernamefield = "//input[@placeholder='Name']"
            // this.emailfield = "//input[@data-qa='signup-email']"
            // this.signupButton="//button[normalize-space()='Signup']"
            // this.gender="#id_gender1"
            // this.password="#password"
            // this.days="#days"
            // this.months="#months"
            // this.years="#years"
            // this.newsLatterCheckBox="#newsletter"
            // this.receiveEmailCheckBox="#optin"
            // this.First_Name="#first_name"
            // this.Last_Name='#last_name'
            // this.company_Name="#company"
            // this.company_address="#address1"
            // this.address="#address2"
            // this.country="#country"
            // this.state="#state"
            // this.city="#city"
            // this.zipCode='#zipcode'
            // this.mobileNumber='#mobile_number'
            // this.createAccount="//button[@data-qa='create-account']"
            // this.continue="//a[@data-qa='continue-button']"

            //new website
            // this.register="//span[normalize-space()='Register']"
            // this.first_Name="//input[@id='First Name']"
            // this.last_Name="//input[@id='Last Name']"
            // this.email_Id="//input[@id='Email Address']"
            // this.password="//input[@placeholder='Enter password']"
            // this.confirm_password="//input[@placeholder='Enter confirm password']"
            // this.continue_Button="//span[normalize-space()='Continue']"
            // this.continue_Otp_Button="#continue"
            // this.back_To_Login_Button="#back-to-login"
            // this.email_Address="//input[@id='Email Address']"
        
         

            //arbo website signup process
            this.signUpButton="//a[normalize-space()='Sign up']"
            this.email_Txt="#Email"
            this.accept_Checkbox="#mat-mdc-checkbox-2-input"
            this.agree_Checkbox="#mat-mdc-checkbox-3-input"
            this.signUp="//span[contains(text(),'Sign up')]"
           
 
        }


        async signUpIntoApplication() {

            // await this.page.locator(this.usernamefield).fill("sidharath singh");
            // await this.page.locator(this.emailfield).fill("sidhu1111@gmail.com");
       
           
            // await this.page.locator(this.signupButton).click();
            // await this.page.locator(this.gender).check();
            // await this.page.locator(this.password).fill("Pitu@1234")
            // await this.page.locator(this.days).selectOption({label:'18'})
            // await this.page.locator(this.months).selectOption({label:'August'})
            // await this.page.locator(this.years).selectOption({label:'2000'})
            
            // await this.page.locator(this.newsLatterCheckBox).check();
            // await this.page.locator(this.receiveEmailCheckBox).check();
           
            // await this.page.locator(this.First_Name).fill("sidharath")
            // await this.page.locator(this.Last_Name).fill("singh")
            // await this.page.locator(this.company_Name).fill("Royal_Indian_Army")
            // await this.page.locator(this.company_address).fill("Dublin Dubai ,headoffice new york")
            // await this.page.locator(this.address).fill("Dubai")
            // await this.page.locator(this.country).selectOption({label:"India"})
            // await this.page.locator(this.state).fill("Haryana")
            // await this.page.locator(this.city).fill("Gurugram")
             
            // await this.page.locator(this.zipCode).fill("122001")
  
            // await this.page.locator(this.mobileNumber).fill("9729892313")
            // await this.page.locator(this.createAccount).click();
          
            // await this.page.locator(this.continue).click();
           //another website start
          
        //   await this.page.locator(this.register).click();
        //   await this.page.locator(this.first_Name).fill("Sid")
        //   await this.page.locator(this.last_Name).fill("kumar")
        //   await this.page.locator(this.email_Id).fill("sidharathkumar976@gmail.com")
        //   await this.page.locator(this.password).fill("Pitu@1234")
        //   await this.page.locator(this.confirm_password).fill("Pitu@1234")
        //   await this.page.locator(this.continue_Button).click();
        //   await this.page.waitForTimeout(99000); 

          
       //   await this.page.locator(this.continue_Otp_Button).click();
        //   await this.page.waitForTimeout(50000)
        //   await this.page.locator(this.back_To_Login_Button).click();
        //   await this.page.locator(this.email_Address).fill("sidharathkumar976@gmail.com")
           

            

         //arbo website locator signup here
          await this.page.locator(this.signUpButton).click();
          await this.page.waitForTimeout(2000)
          await this.page.locator(this.email_Txt).fill("sidharathkumar976@gmail.com")
          await this.page.locator(this.accept_Checkbox).check();
          await this.page.locator(this.agree_Checkbox).check();
          await this.page.waitForTimeout(2000)
          await this.page.locator(this.signUp).click();
           

        }
        

    }

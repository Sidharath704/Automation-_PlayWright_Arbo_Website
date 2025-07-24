exports.loginpage =
  class loginpage {
    page: any;
    email_Id: string;
    password: string;
   
    remember_Button: string;
     sign_In_Button: string;
  
    // get_started_button: string;
    // plan: string;
    // contionue_button: string;
    // grammer_button: string;
    // plus_button: string;
    // generate_button: string;
    // begin_button: string;

    // next_button: string;
    // answer_Id_First: any;
    // all_question_button: string;
    // answer_Id_Second: string;
    // answer_Id_third: string;
    // submit_button: string;
    // english_button: string;
    // all_question_pdf: string;
    // all_answer_pdf: string;
    // all_solution_pdf: string;
  

    //another project locator
    



    //this is another
    //     loginLink: string;
    //     passwordInput: string;
    //     loginbutton: string;



    constructor(page: any) {
      this.page = page;
      // this.loginLink="//input[@data-qa='login-email']"
      // this.passwordInput="//input[@placeholder='Password']"
      // this.loginbutton="//button[normalize-space()='Login']"

      //this is another
      // this.email_Id = "//input[@id='Email Address']"
      // this.password = "//input[@placeholder='Enter password']"
      // this.sign_In_Button = "#sign-in"

    //this is another

     this.email_Id = "#Email"
      this.password = "#Password"
   
      this.remember_Button="#mat-mdc-checkbox-1-input"
         this.sign_In_Button = "//button[@type='submit']"
   
      




     // this.get_started_button = "//div[7]//pricingplan-card[1]//div[1]//div[2]//p-chip[1]//div[1]"
      // this.plan="#plan" 
      // this.contionue_button="//span[@class='p-button-label ng-star-inserted']"

      // this.plan = "//div[contains(text(),'YDS')]"
      // this.english_button = "#English"



      // this.grammer_button = "#Grammer"

      // this.plus_button = "//button[@class='p-inputnumber-button p-inputnumber-increment-button ng-star-inserted']"

      // this.generate_button = "#generate"
      // this.begin_button = "#begin"
      // //   this.all_question_button="#undefined"
      // this.answer_Id_First = "#d"
      // this.next_button = "#next"
      // this.answer_Id_Second = "#c"
      // this.answer_Id_third = "#a"
      // this.submit_button = "#submit"
      // this.all_question_pdf = "#undefined"
      // this.all_answer_pdf = "#undefined"
      // this.all_solution_pdf = "#undefined"



    }


    async gotoLoginPage() {
      //   
      //  await this.page.locator(this.loginLink).fill("sidhu1111@gmail.com");
      //  await this.page.locator(this.passwordInput).fill("Pitu@1234");
      //  await this.page.locator(this.loginbutton).click();
      await this.page.locator(this.email_Id).fill("sidharathkumar976@gmail.com");
     
      await this.page.locator(this.password).fill("Test@1234");
      await this.page.locator(this.remember_Button).check();
      await this.page.locator(this.sign_In_Button).click();
    
      // await this.page.waitForTimeout(8000)
  //    await this.page.locator(this.get_started_button).click();
      // await this.page.waitForTimeout(2000)
      // await this.page.locator(this.plan).click();
      //  await this.page.locator(this.english_button).click();

      // await this.page.locator(this.contionue_button).click();
      // await this.page.waitForTimeout(9000)

      // await this.page.locator(this.plan).click();
      // await this.page.locator(this.grammer_button).click();
      //    await this.page.waitForTimeout(4000)
      // await this.page.locator(this.plus_button).click();
      // await this.page.locator(this.plus_button).click();
      // await this.page.locator(this.plus_button).click();

      // await this.page.locator(this.generate_button).click();
      // await this.page.locator(this.begin_button).click();




      // await this.page.locator(this.answer_Id_First).click();
      // //   // await this.page.waitForTimeout(2000)
      // await this.page.locator(this.next_button).click();
      // await this.page.locator(this.answer_Id_Second).click();
      // await this.page.locator(this.next_button).click();
      // //  //  await this.page.waitForTimeout(2000)
      // await this.page.locator(this.answer_Id_third).click();
      // //  // await this.page.waitForTimeout(2000)
      // await this.page.locator(this.submit_button).click();
      // //   // await this.page.waitForTimeout(2000)
      // await this.page.locator(this.all_question_pdf).click();
      // //  // await this.page.waitForTimeout(1000)
      // await this.page.locator(this.all_answer_pdf).click();
      // //   await this.page.waitForTimeout(1000)
      // await this.page.locator(this.all_solution_pdf).click();







    }


  }


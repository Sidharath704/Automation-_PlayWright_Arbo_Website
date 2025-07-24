
import { test, expect } from '@playwright/test';


import { loginpage } from '../pages/loginpage'


 import {signuppage} from '../pages/signuppage'
 import {forgotpasswordpage} from '../pages/forgotpasswordpage'

 import {landingPage} from '../pages/landingPage'





test.only('Signup ,Login , Forgot Password, Payment Method', async ({ page }) => {
  //website url


   await page.goto("https://accounts.qa2.arbohq.com/sign-in")


  
//signup
  // const signup = new signuppage(page)
  // await signup.signUpIntoApplication()
  // await page.screenshot({path:'tests/screenshots/'+Date.now()+'signup.png',fullPage:true})

// 
  //Login
  const login = new loginpage(page)
  await login.gotoLoginPage()
  

  await page.screenshot({path:'tests/screenshots/'+Date.now()+'LoginPage.png',fullPage:true})

 
//forgot password

//  const forgotpassword = new forgotpasswordpage(page)
//  await forgotpassword.gotoforgotPasswordPage();
//   await page.screenshot({path:'tests/screenshots/'+Date.now()+'forgotPasswordPage.png',fullPage:true})

//Landing Page

const landing =new landingPage(page)
await landing.gotoLandingPage();
await page.screenshot({path:'tests/screenshots/'+Date.now()+'landingPage.png',fullPage:true})










  

  




});


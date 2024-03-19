import { LoginPage } from "../pages/login.page"

//Create object of loginpage page class
//asigned to reference of constant data type, it does not change
const loginPg = new LoginPage()

it('login test', function(){
    loginPg.navigate();
    loginPg.enterUserName();
    loginPg.enterPassword();
    loginPg.clickLogin();
    cy.contains('Login Successful')

})
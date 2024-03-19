export class LoginPage{

    // Page Objects - Web Elements and their locations
    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    // Methods - Are the actions to perform on the same page objects above in the login page
    navigate(){
        cy.visit('https://trytestingthis.netlify.app/')
    }

    enterUserName(){
        cy.get('#uname').type('test')
    }

    enterPassword(){
        cy.get('#pwd').type('test')
    }

    clickLogin(){
        cy.get('[type="submit"]').click()
    }


}
import {BasePage} from "./basePage";

class LoginPage extends BasePage{

    loginAs(username:string,password:string):void{
        cy.get('#loginForm_username').type(username)
        cy.wait(500)
        cy.get('#loginForm_password').type(password);
        cy.wait(500)
        cy.contains('LOG IN').click();
    }
}


export default new LoginPage();
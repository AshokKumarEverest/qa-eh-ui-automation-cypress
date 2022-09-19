export class BasePage {
    invokeApp(url:string="/"){
        cy.visit(url)
        cy.wait(100);
    }

}
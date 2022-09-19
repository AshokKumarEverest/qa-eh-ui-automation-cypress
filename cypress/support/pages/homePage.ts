import {BasePage} from "./basePage";

class HomePage extends BasePage{

   private navigateToReportingAndCompliance():void{
        cy.contains('Reporting and compliance').click();
    }

    navigateToComplianceReport():void{
        this.navigateToReportingAndCompliance();
        cy.contains('Compliance reports').click();
    }
}

export default  new HomePage();
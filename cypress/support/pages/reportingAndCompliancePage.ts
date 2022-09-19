import {BasePage} from "./basePage";

class ReportingAndCompliancePage extends BasePage{

    selectState(state: String){
        cy.get('.ant-select-selection-item').click();
        cy.get(`.rc-virtual-list-holder-inner > div[title = ${state}]`).click();
    }

    //Hard coded student resential address and other information collecation template for now
    selectReportTemplate(){
        cy.get('table > tbody > tr:nth-child(3) > td:nth-child(1) > a').click();
    }
}
export default new ReportingAndCompliancePage();
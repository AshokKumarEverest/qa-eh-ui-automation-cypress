class ReportExport {
    
    downLoadReport(){
        cy.get('table > tbody > tr:nth-child(1) > td:nth-child(4) > div > div:nth-child(1) > button > span').click();
    }

}
export default new ReportExport();
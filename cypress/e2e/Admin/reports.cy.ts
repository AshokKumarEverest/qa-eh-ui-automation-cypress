import LoginPage from "../../support/pages/loginPage";
import HomePage from "../../support/pages/homePage";
import ComplainceReportPage from "../../support/pages/reportingAndCompliancePage";
import ReportExportPage from "../../support/pages/reportExportPage";
import {Hook} from "mocha";

describe('Compliance and reporting tests', () => {

  let userName:string='ashok.kumar@educationhorizons.com';
  let password:string='Zunia@123'

  beforeEach("InvokeApp",()=>{
    LoginPage.invokeApp();
  })

  it('Generate compliance report', () => {

    LoginPage.loginAs(userName,password);
    HomePage.navigateToComplianceReport();
    ComplainceReportPage.selectState('VIC');
    ComplainceReportPage.selectReportTemplate();
    ReportExportPage.downLoadReport();
    cy.wait(5000);
  })

  it('convert student excel to json', function(){
    const studentExcelFilePath = '../qa-ui-automation-cypress/cypress/downloads/Student Residential Address and Other Information Collection-20220919060921.xlsx'
    const studentSheetName = 'Statement of Student Addresses'

    cy.task("generateStudentExcel", {studentExcelFilePath, studentSheetName});

    cy.fixture('StudentJSON').then(data => {
      expect(data).to.be.an('array')   
      expect(data[0]["Student"]).to.eq('Location AGEID');        
      expect(data[1]["Student"]).to.eq('200'); 
      expect(data[1]["__EMPTY_8"]).to.eq('AshokTest1_ContactPerson_SurName'); 
    });
  })
   after(() => {
      const JsonFilePath = '../qa-ui-automation-cypress/fixtures/StudentJSON.json'
      cy.task("deleteJSONFileInFixture", {JsonFilePath})
      // const ExcelFilePath = '../qa-ui-automation-cypress/cypress/downloads/Student Residential Address and Other Information Collection-20220919060921.xlsx'
      // cy.task("deleteJSONFileInFixture", {ExcelFilePath})
    })
})
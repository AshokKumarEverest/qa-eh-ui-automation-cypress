import { defineConfig } from "cypress";
import * as dotenv from "dotenv";
dotenv.config();
import * as xlsx from 'xlsx';
import fs from 'fs'; 
import assert from 'assert'

export default defineConfig({
  watchForFileChanges:false,
  chromeWebSecurity:false,
  e2e: {
    baseUrl:process.env.URL,
    defaultCommandTimeout:30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        generateStudentExcel: generateStudentExcel,
        deleteJSONFileInFixture: deleteJSONFileInFixture 
      });
    },
  },
});

//studentExcelFilePath, studentSheetName
function generateStudentExcel(args: any){
  const wb = xlsx.readFile(args.studentExcelFilePath);
  const studentSheetName = wb.Sheets['Statement of Student Addresses']

  let studentData = xlsx.utils.sheet_to_json(studentSheetName, { raw: false })
  console.log("Ashok", studentData)

  //Write the File
  fs.writeFileSync('../qa-ui-automation-cypress/cypress/fixtures/StudentJSON.json', JSON.stringify(studentData, null, 2))
  return '@studentData'
}

//Delete the File
function deleteJSONFileInFixture(args: any){
  fs.unlinkSync('../qa-ui-automation-cypress/cypress/fixtures/StudentJSON.json');
  return "Deleted"
}

import { LightningElement } from 'lwc';
import COMPANY_OBJECT from '@salesforce/schema/Company__c'; /*to create a Record using default mode in lds*/ 
import COMPANY_NAME from '@salesforce/schema/Company__c.Name'; //getting the fields from html for edit
import EMPLOYEE_NAME from '@salesforce/schema/Company__c.Employee_Name__c';

/*export default class LdsFormCRUD extends LightningElement {  // THIS IS DEFAULT FORM FOR CREATING RECORD

    objectApiName = COMPANY_OBJECT;
}*/

//Edit and view mode is same only just change the mode in html file

export default class LdsFormCRUD extends LightningElement { //THIS IS EDIT FORM

    objectApiName = COMPANY_OBJECT;
    fields = [COMPANY_NAME,EMPLOYEE_NAME]; //storing the values in array from html and object fields
    recordId = "a01Hs00001oRMZoIAO";
}
import { LightningElement ,api} from 'lwc';
import College_Object from '@salesforce/schema/College__c';
import Name_Field from '@salesforce/schema/College__c.Name';
import Nirf_Field from '@salesforce/schema/College__c.Nirf_Ranking__c';
import TopDept_Field from '@salesforce/schema/College__c.Top_Department__c';

export default class RecordViewFormLDS extends LightningElement {

    nameField = Name_Field
    Nirfapi = Nirf_Field;
    TopDeptapi = TopDept_Field;
    objectApiName = College_Object;

    @api recordId = "a00Hs000016gVLcIAM";

    // IF YOU DROP TO ANY RECORD PAGE THEN THIS WILL COLLECT THE ID AUTOMATICALLY
    // @api recordId;
    // @api objectApiName

}
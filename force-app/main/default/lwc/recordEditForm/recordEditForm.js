import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import COLLEGE_OBJECT from '@salesforce/schema/College__c';
import PLAYER_NAME from '@salesforce/schema/college__c.Name';
import PLAYER_NIRF from '@salesforce/schema/college__c.Nirf_Ranking__c';
import PLAYER_PHONE from '@salesforce/schema/college__c.Phone__c';
import PLAYER_TOPDEPT from '@salesforce/schema/college__c.Top_Department__c';
import PLAYER_LOGO from '@salesforce/schema/college__c.Logo__c';


export default class RecordEditForm extends LightningElement {

    ObjectApiName = COLLEGE_OBJECT;
    namefield = PLAYER_NAME;
    nirffield =  PLAYER_NIRF;
    phonefield = PLAYER_PHONE;
    topdeptfield = PLAYER_TOPDEPT;
    logofield = PLAYER_LOGO;

    HandleSuccess(event){
        
        const events = new ShowToastEvent({
            title : "successful",
            message :"college created",
            varient:'success'

        });
        this.dispatchEvent(events);
    }
}
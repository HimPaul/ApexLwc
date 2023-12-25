import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement,api, wire} from 'lwc';

export default class WireDecoratorExample1 extends LightningElement {

    @api recordId; //id of some perticular record

    @wire (getRecord,{recordId:'$recordId',fields:['Account.Name','Account.Phone']})
    accounts //accounts is variable name

     get getName()
     {
       if(this.accounts.data)

          return getFieldValue(this.accounts.data,'Account.Name');

        else if(this.accounts.error)

           return this.accounts.error;
       
     }

     get getPhone()
     {
       if(this.accounts.data)

          return getFieldValue(this.accounts.data,'Account.Phone');

        else if(this.accounts.error)

           return this.accounts.error;
       
     }
}
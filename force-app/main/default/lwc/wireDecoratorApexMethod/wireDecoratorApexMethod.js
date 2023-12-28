import { LightningElement,wire,track } from 'lwc';
import getAccountDetails from '@salesforce/apex/wireDemoMethod.getAccountDetails';

const column = [
    {label : 'Name', fieldName : "Name"},
    {label :'Account Id', fieldName : "Id"},
];
export default class WireDecoratorApexMethod extends LightningElement {

    @track columns = column;
    @track data = [];

    @wire (getAccountDetails) wiredAcc({data,error}){
        if(data){
            this.data = data;
        }else if(error){
            console.log('error occured');
        }
    }
}
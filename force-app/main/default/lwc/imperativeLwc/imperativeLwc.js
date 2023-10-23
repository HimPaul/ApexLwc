import { LightningElement,track } from 'lwc';
import getCollege from '@salesforce/apex/ImperativeClass.getCollegeDetails';

const columns =[
    {label : 'College Name',fieldName : "Name"},
    {label : 'Top Department',fieldName : "Top_Department__c"},

]
export default class ImperativeLwc extends LightningElement {

    @track columns = columns;
    @track data =[];

    connectedCallback(){
        getCollege()
        .then(result =>{
            this.data = result;
        })
        .catch(error=>{
            console.log("error occured");
        })
    }

}
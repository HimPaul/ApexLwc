import { LightningElement ,wire,track} from 'lwc';
import getCollegeList from '@salesforce/apex/wireDemoClass.getCollegeDetails'


const columns =[
    {label : 'College Name',fieldName : "Name"},
    {label : 'Top Department',fieldName : "Top_Department__c"},
    {label : 'Phone',fieldName : "Phone__c"},

]

export default class WireDemo extends LightningElement {

    @track columns = columns;
    @track data = [];

    @wire(getCollegeList)
    wiredCollege({data,error}){
        if(data){
            this.data = data;
        }else if(error){
            console.log("error occured");
        }
    }
}
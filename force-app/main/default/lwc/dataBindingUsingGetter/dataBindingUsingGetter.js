import { LightningElement } from 'lwc';

export default class DataBindingUsingGetter extends LightningElement {

    firstName = '';
    lastName = '';

    handleChange(event){
        const field = event.target.name;
        if(field === 'fname'){
            this.firstName = event.target.value;
        }
        else if(field ==='lname'){
            this.lastName = event.target.value;
        }
    }
    get UpperCaseFullName(){
        return `${this.firstName}${this.lastName}`.toUpperCase();
    }
}
import { LightningElement,track } from 'lwc';

export default class TractTest extends LightningElement {

    @track FullName = {firstName:"", lastName:" "};
    
    onNameChange(event){
        const field = event.target.name;

        if(field === 'firstName'){
            this.FullName.firstName = event.target.value;
        }
        else if(field === 'lastName'){
            this.FullName.lastName = event.target.value;
        }
       
    }  
}
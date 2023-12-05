import { LightningElement } from 'lwc';

export default class DataBindingFinal extends LightningElement {


    person ={

        name: 'Himadri Paul',
        age : 31,
        city : 'pune'
    }

    get personEligibility(){

        const vote = this.person.age >= 18? 'You can vote' : this.person.age < 18? 'You CanNot vote':'';
        return vote;
    }

}
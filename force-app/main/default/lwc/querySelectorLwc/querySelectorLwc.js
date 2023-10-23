import { LightningElement } from 'lwc';

export default class QuerySelectorLwc extends LightningElement {

    greeting = 'himadri';

    handleClick(event){

        this.greeting = this.template.querySelector("lightning-input").value;
    }
}
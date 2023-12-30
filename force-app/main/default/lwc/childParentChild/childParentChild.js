import { LightningElement } from 'lwc';

export default class ChildParentChild extends LightningElement {

    name;
    nameChangeHandler(event){
        this.name = event.target.value;
        const myevent = new CustomEvent('childevent',{detail : this.name});
        this.dispatchEvent(myevent);
    }
}
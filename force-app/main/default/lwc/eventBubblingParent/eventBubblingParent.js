import { LightningElement } from 'lwc';

export default class EventBubblingParent extends LightningElement {
    receivedName;
    constructor(){
        super();
        this.template.addEventListener('mycustomevent',this.handleCustomEvent.bind(this));
    }
    handleCustomEvent(event){
        this.receivedName = event.detail;
    }
}
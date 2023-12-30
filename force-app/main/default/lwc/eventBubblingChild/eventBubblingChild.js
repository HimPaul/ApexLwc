import { LightningElement } from 'lwc';

export default class EventBubblingChild extends LightningElement {

    name;
    onchangenamehandler(event){
        this.name = event.target.value;
        const changeEvent = new CustomEvent('mycustomevent',{detail:this.name,bubbles:true});
        this.dispatchEvent(changeEvent);
    }
}
import { LightningElement } from 'lwc';

export default class CholdToParentparent extends LightningElement {
    message='Parent message';
    hanldMessage(event){
        this.message = event.detail;
    }
}
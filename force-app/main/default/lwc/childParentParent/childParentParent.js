import { LightningElement } from 'lwc';

export default class ChildParentParent extends LightningElement {

    dataReceived;
    parenteventhandler(event){

        console.log("parent handler triggered by child");
        this.dataReceived = event.detail;
    }
}
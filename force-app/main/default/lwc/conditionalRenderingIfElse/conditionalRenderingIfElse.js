import { LightningElement } from 'lwc';

export default class ConditionalRenderingIfElse extends LightningElement {

    flag = false;

    statuschanged(event){

        this.flag = event.target.checked;
    }
}
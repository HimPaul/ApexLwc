import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    FunctionClick(){
        this.template.querySelector("c-child-component").HandleClick();
    }
}
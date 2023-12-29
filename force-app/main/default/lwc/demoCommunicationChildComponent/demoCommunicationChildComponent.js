import { LightningElement,api,track } from 'lwc';

export default class DemoCommunicationChildComponent extends LightningElement {

    @api passedName;
    @api passedFull;
    sirname;
    sirnamehandler(sirname){
        console.log("check please child");
        this.sirname = sirname;
    }
}
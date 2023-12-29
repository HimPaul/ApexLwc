import { LightningElement,api,track } from 'lwc';

export default class DemoCommunicationParentComponent extends LightningElement {

    name = 'Himadri paul';
    sirname;
    @track passedObj ={

        name:"Anamika",
        age:31
    }

    //Event happen on Parent Component
    nameChangeHandler(event){
        
        this.name = event.target.value;
    }
    //ByCalling Child Component method in Parent Component
    SirNameChangeHandler(event){
        console.log("check please parent");
        this.sirname = event.target.value;
        console.log("this.sirname"+this.sirname);
        const childComp = this.template.querySelector('c-demo-communication-child-component');
        childComp.sirnamehandler(this.sirname);
    }
}
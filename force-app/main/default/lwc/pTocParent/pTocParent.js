import { LightningElement } from 'lwc';

export default class PTocParent extends LightningElement {

    // messagefromparent;
    // handlechange(event){
    //     this.messagefromparent = event.target.value;
    // }

    //this is using method
    messagefromparent;
    handlechange(event){
        this.template.querySelector('c-p-to-cchild').acceptMessage(event.target.value);     
           
    }

}
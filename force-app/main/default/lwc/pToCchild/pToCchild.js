import { LightningElement ,api} from 'lwc';

export default class PToCchild extends LightningElement {

    // @api message;

    //this isusing method
    messagefrommethod; 
    @api acceptMessage(msg){
        this.messagefrommethod = msg;
    }
}
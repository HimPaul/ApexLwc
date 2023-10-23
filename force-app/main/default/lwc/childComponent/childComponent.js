import { LightningElement,api} from 'lwc';

export default class ChildComponent extends LightningElement {

    @api message = " hey paul";

    @api college = "Bvb Cet";

    @api itemName = "I am in child component";

    @api HandleClick() {
        this.itemName = "CHANGED USING FUNCTION";
    }
}
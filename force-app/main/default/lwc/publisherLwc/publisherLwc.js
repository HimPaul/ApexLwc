import { LightningElement,wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import {publish,MessageContext} from 'lightning/messageService';
export default class PublisherLwc extends LightningElement {

    @wire(MessageContext) MessageContext;
    datatosend;

    changeHandler(event){

        this.datatosend = event.target.value;

    }
    publishHandler(event){

        let message = {message:this.datatosend};
        publish(this.MessageContext,SampleMessageChannel,message);

    }
}
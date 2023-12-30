import { LightningElement,wire } from 'lwc';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';
import {subscribe,MessageContext} from 'lightning/messageService';

export default class SubscriberLwc extends LightningElement {

    @wire(MessageContext) MessageContext;
    dataReceived;
    connectedCallback(){
        this.handlesubscibemethod();
    }
    handlesubscibemethod(){
        this.subscription = subscribe(this.MessageContext,SampleMessageChannel,(message)=>{

            this.dataReceived = message.message;
        });
    }
}
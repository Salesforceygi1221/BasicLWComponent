import { LightningElement, track, wire } from 'lwc';
import opportunityMethod from '@salesforce/apex/OpportunityHandler.opportunityMethod';

export default class OpportunityDatatable extends LightningElement {
     columns = [{
            label:'Opportunity Name',
            fieldName:'Name',
            type: 'text'
        },
        {
            label:'Stage Name',
            fieldName:'StageName',
            type:'text'
        },
        {
            label:'Lead Source',
            fieldName:'LeadSource',
            type:'text'
        },
        {
            label:'Account Id',
            fieldName:'AccountId',
            type:'text'
        }
    ];

    error;
    oppList;
    @wire(opportunityMethod)wiredOpportunity({error,data}) {
        if (data) {
            this.oppList = data;
        } else if (error) {
            this.error = error;
        }
    }
}
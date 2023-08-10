public with sharing class OpportunityHandler {
    public OpportunityHandler() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> opportunityMethod(){
        return [SELECT Id, Name, StageName, LeadSource, AccountId FROM Opportunity];
    }
}
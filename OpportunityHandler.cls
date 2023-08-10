public with sharing class OpportunityHandler {
    public OpportunityHandler() {
          //code  here     
    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> opportunityMethod(){
        return [SELECT Id, Name, StageName, LeadSource, AccountId FROM Opportunity];
    }
}

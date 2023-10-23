public with sharing class ApexDemo32 {
   
    public static void deleteOpps(){

        List<Opportunity> oppList = new List<Opportunity>();

        oppList = [SELECT Id FROM Opportunity WHERE StageName = 'Closed Lost' && CreatedDate = LAST_MONTH];

        if(oppList.size() > 0){

            delete oppList;
        }
    }
}
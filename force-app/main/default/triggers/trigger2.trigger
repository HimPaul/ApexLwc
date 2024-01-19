trigger trigger2 on Account (after update) {

   Map<Id,Account> mapAcc = new Map<Id,Account>();

   List<Contact> conList = new List<Contact>();

   for(Account acc : trigger.new){
      
       if(acc.BillingState != trigger.oldMap.get(acc.id).BillingState){

        mapAcc.put(acc.Id,acc);
       }
   }
   if(mapAcc.size() > 0){

     conList = [SELECT AccountId,AccBillingState__c FROM Contact WHERE AccountId IN : mapAcc.keyset()];

     if(conList.size() > 0){

        for(Contact con : conList){

            con.AccBillingState__c = mapAcc.get(con.AccountId).BillingState;
        }
     }
     update conList;
   }
}
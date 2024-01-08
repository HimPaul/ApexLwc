//WRITE A TRIGGER THAT WILL UPDATE A CUSTOM FIELD ON A CONTACT RECORD WHENEVER THE RELATED ACCOUNT'S BILLING STATE IS CHANGED

trigger trigger2 on Account (after update){

   Map<Id,Account> mapAccount = new Map<Id,Account>();

   List<Contact> conList = new List<Contact>();

   for(Account acc : trigger.new){

    if(acc.BillingState != trigger.oldMap.get(acc.Id).BillingState){

        mapAccount.put(acc.Id,acc);
    }
   }
   if(mapAccount.size() > 0){

     conList = [SELECT AccBillingState__c,AccountId FROM Contact WHERE AccountId IN : mapAccount.keyset()];

     if(conList.size() > 0){

        for(Contact con : conList){

            con.AccBillingState__c = mapAccount.get(con.AccountId).BillingState;
        }
     }
     update conList;
   }
}
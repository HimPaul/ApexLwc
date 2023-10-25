
//If the Account phone is updated then populate the phone number on all related Contacts (Home Phone field). [Using Map]
trigger triggerAccount on Account (after update) {

   Map<Id,Account> accMap = new Map<Id,Account>();

   List<Contact> conList = new List<Contact>();

   for(Account acc : trigger.new){

    if(acc.billingcity != trigger.oldMap.get(acc.Id).billingcity){

        accMap.put(acc.Id,acc);
    }
   }
   if(accMap.size() > 0){

    conList = [SELECT Id,Account_Billing_City__c, AccountId FROM Contact WHERE AccountId IN: accMap.KeySet()];

    if(conList.size() > 0){

        for(Contact con : conList){

            con.Account_Billing_City__c = accMap.get(con.AccountId).billingcity;
        }
    }
    update conList;
   }
}
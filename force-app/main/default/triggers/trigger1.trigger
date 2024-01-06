
//.If the Account phone is updated then populate the phone number on all related Contacts (Home Phone field). [Using Map]

trigger trigger1 on Account (after update) {

   Map<Id,Account> mapAccount = new Map<Id,Account>();

   List<Contact> conList = new List<Contact>();

   for(Account acc : trigger.new){

      if(acc.Phone != trigger.oldMap.get(acc.Id).Phone){

         mapAccount.put(acc.Id,acc);
      }
   }
   if(mapAccount.size() > 0){

       conList = [SELECT AccountId,Phone FROM Contact WHERE AccountId IN : mapAccount.keyset()];

       if(conList.size() > 0){

          for(Contact con : conList){

            con.Phone = mapAccount.get(con.AccountId).Phone;
          }
       }
       update conList;
   }
}
/*WHENEVER A CONTACT'S DESCRIPTION IS UPDATED THEN ITS PARENT ACCOUNTS'S DESCRIPTION SHOULD ALSO GET UPDATED BY IT
(UPDATE PARENT FROM CHILD)*/

trigger trigger3 on Contact (after update) {

    Map<Id,Contact> mapCon = new Map<Id,Contact>();

    List<Account> accList = new List<Account>();

    for(Contact con : trigger.new){

        if(con.Description != trigger.oldMap.get(con.Id).Description){

            mapCon.put(con.AccountId,con);
        }
    }
    if(mapCon.size() > 0){

        accList = [SELECT Id,Description FROM Account WHERE Id IN : mapCon.keyset()];

        if(accList.size() > 0){

            for(Account acc : accList){

                acc.Description = mapCon.get(acc.Id).Description;
            }
        }
        update accList;
    }
}
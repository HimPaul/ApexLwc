trigger trigger3 on Contact (after update) {

    Map<Id,Contact> mapCon = new Map<Id,Contact>();

    List<Account> listAcc = new List<Account>();

    for(Contact con : trigger.new){

        if(con.Description != trigger.oldMap.get(con.Id).Description){

            mapCon.put(con.AccountId,con);
        }
    }
    if(mapCon.size() > 0){

        listAcc = [SELECT Id,Description FROM Account WHERE Id IN : mapCon.keyset()];

        if(listAcc.size() > 0){

            for(Account acc : listAcc){

                acc.Description = mapCon.get(acc.Id).Description;
            }
        }
        update listAcc;
    }
}
trigger triggerContact on Contact (after update) {

    Map<Id,Contact> conMap = new Map<Id,Contact>();

    List<Account> accList = new List<Account>();

    for(Contact con : trigger.new){

        if(con.Description != trigger.oldMap.get(con.Id).Description){

            conMap.put(con.AccountId,con);
        }
    }

    if(conMap.size() > 0){

        accList = [SELECT Id,Description FROM Account WHERE Id IN : conMap.KeySet()];

        if(accList.size() > 0){

        for(Account acc : accList){

            acc.Description = conMap.get(acc.Id).Description;
        }
    }
}
    update accList;
}
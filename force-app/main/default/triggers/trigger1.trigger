trigger trigger1 on Account (after update) {

    Map<Id,Account> accMap = new Map<Id,Account>(); // storing parent account id

    List<Contact> conList = new List<Contact>();

    for(Account acc : trigger.new){

        if(acc.Phone != trigger.oldMap.get(acc.id).Phone){

            accMap.put(acc.Id,acc);
        }
    }
    if(accMap.size() > 0){

        conList = [SELECT AccountId,Phone FROM Contact WHERE AccountId IN : accMap.keyset()];

        if(conList.size() > 0){

            for(Contact con : conList){

                con.Phone = accMap.get(con.AccountId).Phone;
            }
        }
        update conList;
    }
}
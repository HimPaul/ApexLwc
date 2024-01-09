//TRIGGER TO PREVENT DUPLICATION OF ACCOUNT RECORD BASED ON NAME WHENEVER A RECORD IS INSERTED OR UPDATED

trigger trigger4 on Account (before insert,before update) {

    List<String> listName = new List<String>();

    List<Account> accList = [SELECT Id,Name FROM Account];

    for(Account acc : trigger.new){

        listName.add(acc.Name);
    }
    for(Account acc : trigger.new){

        if(listName.contains(acc.Name)){

            acc.addError('Name Already Exist');
        }
    }

}
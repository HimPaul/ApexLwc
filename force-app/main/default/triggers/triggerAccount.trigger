
trigger triggerAccount on Account (before insert,before update) {

    List<String> listName = new List<String>();

    List<Account> accList = [SELECT Id,Name FROM Account];

    for(Account acc : accList){

        listName.add(acc.Name);
    }
    for(Account acc : trigger.new){

        if(listName.contains(acc.Name)){

            acc.addError('Name already exist');
        }
    }
}





trigger trigger4 on Contact (before insert,before update) {

     List<Contact> conList = [SELECT Id,LastName,Email,Phone FROM Contact];

    for(Contact con : trigger.new){

        for(Contact existingrRecord : conList){

            if(con.LastName == existingrRecord.LastName && con.Email == existingrRecord.Email && con.Phone == existingrRecord.Phone){

                con.addError('Duplicates Found');
            }
        }

    }

}

//Do not allow contact creation if a contact already exists with the same last name, email & phone

trigger trigger5 on Contact (before insert) {

    List<Contact> conList = [SELECT Id,LastName,Email,Phone FROM Contact];

    for(Contact con : trigger.new){

        for(Contact existingrRecord : conList){

            if(con.LastName == existingrRecord.LastName && con.Email == existingrRecord.Email && con.Phone == existingrRecord.Phone){

                con.addError('Duplicates Found');
            }
        }

    }

}
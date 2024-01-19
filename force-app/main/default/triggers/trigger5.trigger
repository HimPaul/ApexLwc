trigger trigger5 on Account (after insert,after update) {

    List<Contact> conList = new List<Contact>();

    if((trigger.isAfter)&&(trigger.isAfter || trigger.isUpdate)){

        for(Account acc : trigger.new){

            if(acc.ContactPhoneCopy__c == true){

                Contact con = new Contact();
                con.AccountId = acc.Id;
                con.LastName = acc.Name;
                con.Phone = con.Phone;
                conList.add(con);

            }
        }
        if(conList.size() > 0){

            insert conList;
        }
    }
}
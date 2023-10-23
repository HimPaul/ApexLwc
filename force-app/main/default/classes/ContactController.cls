public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        return [
            SELECT id, FirstName, Name, LastName, Title, Email
            FROM Contact
            limit 5
        ];
    }
}
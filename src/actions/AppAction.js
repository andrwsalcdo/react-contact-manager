import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import ContactsAPI from '../utils/ContactsAPI'


export default {
    recieveContacts: () => {
        ContactsAPI
            .getContacts('https://api-contacts-nbwxrxtxhq.now.sh/contacts')
            .then(contacts => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.RECEIVE_CONTACTS,
                    contacts: contacts 
                })
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.RECEIVE_CONTACTS_ERROR, 
                    message: message 
                })
            }); 
    }, 

    saveContact: (contact) => {
        ContactsAPI
            .saveContact('https://api-contacts-nbwxrxtxhq.now.sh/contacts', contact)
            .then(contact => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.RECEIVE_CONTACT,
                    contact: contact 
                })
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.RECEIVE_CONTACT_ERROR, 
                    message: message 
                })
            }); 
    },
    
    deleteContact: (id) => {
        ContactsAPI
            .deleteContact('https://api-contacts-nbwxrxtxhq.now.sh/contacts/' +id)
            .then(contact => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.DELETE_CONTACT,
                    id: id
                })
            })
            .catch(message => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.DELETE_CONTACT_ERROR, 
                    message: message 
                })
            }); 
    }
}
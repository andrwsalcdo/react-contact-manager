import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change'; 

// define the contacts store as empty array
let _contacts = []; 

function setContacts(contacts) {
    _contacts = contacts.sort(SortFirstName); 
}

function setContact(contact) {
    _contacts.push(contact); 
    setContacts(_contacts);
}

function deleteContact(id) {
    let index = _contacts.findIndex(x => x.id === id); 
    _contacts.splice(index, 1); 
}
// sort contacts by first name 
function SortFirstName(a,b) {
    let aName = a.name.toLowerCase(); 
    let bName = b.name.toLowerCase(); 
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0 )); 
}

// Define public event listeners & getters that the UI 
// uses to listen for changes & retrieve the store
class AppStoreClass extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT); 
    }

    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb); 
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb); 
    }

    getContacts() {
        return _contacts; 
    }
}

// Initialize to register with the dispatcher 
// and export for React components
const AppStore = new AppStoreClass(); 

AppStore.dispatchToken = AppDispatcher.register(action => {
    switch(action.actionType){
        case AppConstants.RECEIVE_CONTACTS: 
            setContacts(action.contacts); 
            AppStore.emitChange(); 
            break
        case AppConstants.RECEIVE_CONTACTS_ERROR: 
            alert(action.message); 
            AppStore.emitChange(); 
            break
        case AppConstants.RECEIVE_CONTACT: 
            setContact(action.contact);
            AppStore.emitChange(); 
            break
        case AppConstants.RECEIVE_CONTACT_ERROR: 
            alert(action.message); 
            AppStore.emitChange(); 
            break
        case AppConstants.DELETE_CONTACT: 
            deleteContact(action.id);
            AppStore.emitChange(); 
            break
        case AppConstants.DELETE_CONTACT_ERROR: 
            alert(action.message); 
            AppStore.emitChange(); 
            break
        
        default: 
    }
}); 

export default AppStore
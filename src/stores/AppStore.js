import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change'; 

// define the contacts store as empty array
let _contacts = []; 

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
        // receive, delete, save contact actions
    }
}); 

export default AppStore
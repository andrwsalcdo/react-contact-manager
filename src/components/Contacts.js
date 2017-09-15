import React, { Component } from 'react'
import AppActions from '../actions/AppAction'
import AppStore from '../stores/AppStore'


class Contacts extends Component {
    constructor(props){
        super(props); 
        this.state = {
            contacts: [], 
        }
    }
    
    componentWillMount() {
        AppStore.addChangeListener(this.onChange); 
    }
    
    componentDidMount() {
        AppActions.recieveContacts(); 
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onChange); 
    }

    onChange = () => {
        this.setState({
            contacts: AppStore.getContacts()
        }, () => {
            console.log(this.state);
        }); 
    }
    

    render() {
        return (
            <div>
                Contacts 
            </div>
        );
  }
}

export default Contacts

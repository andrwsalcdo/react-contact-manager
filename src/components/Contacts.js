import React, { Component } from 'react'
import AppActions from '../actions/AppAction'
import AppStore from '../stores/AppStore'
import { Grid, Row, Col, ListGroup } from 'react-bootstrap'
import ContactListItem from './ContactListItem'


function getContactListItem(contact) {
    return (
        <ContactListItem key={contact.id} contact={contact} />
    ); 
}

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
        }); 
    }
    

    render() {
        let contactListItems; 
        if(this.state.contacts) {
            contactListItems = this.state.contacts.map(contact =>
                getContactListItem(contact)
            )
        }
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <ListGroup>
                            {contactListItems}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        );
  }
}

export default Contacts

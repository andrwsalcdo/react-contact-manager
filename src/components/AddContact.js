import React, { Component } from 'react'
import {Panel, FormGroup, Button, Grid, Row, Col } from 'react-bootstrap'
import AppActions from '../actions/AppAction'

class AddContact extends Component {
  constructor(props) {
      super(props);
      this.state = {
          newContact: {
            name: '', 
            email: '',
            phone: ''  
          }
      }
  }
  
  handleChange = (propertyName) => (e) => {
    const { newContact } = this.state; 
    const addContact = {
        ...newContact, 
        [propertyName]: e.target.value
    }; 
    this.setState({ newContact: addContact }); 
  }

  handleSubmit = (e) => {
      //require at least a 'name'
      if(this.state.newContact.name === '') {
          alert('Name is required'); 
      } else {
          // save contact action  
          AppActions.saveContact(this.state.newContact); 
          //clear the form
          this.setState({
              newContact: {
                  name: '', 
                  email: '', 
                  phone: ''
              }
          })      
      }
      e.preventDefault();
  }

  render() {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <Panel header="Add Contact">
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <input 
                                    className="form-control"
                                    type="text"
                                    placeholder="Add Name" 
                                    value={this.state.newContact.name}
                                    onChange={this.handleChange('name')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <input 
                                    className="form-control"
                                    type="text"
                                    placeholder="Add Email" 
                                    value={this.state.newContact.email}
                                    onChange={this.handleChange('email')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <input 
                                    className="form-control"
                                    type="text"
                                    placeholder="Add Phone" 
                                    value={this.state.newContact.phone}
                                    onChange={this.handleChange('phone')}
                                />
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default AddContact
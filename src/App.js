import React, { Component } from 'react';

import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const API_URL = 'https://address-book-api-kfpkaqtghu.now.sh';

class App extends Component {

constructor(props){
  super(props)
  this.state={
    contacts: [],
    searchText: '',
    firstName: '',
    lastName: '',
    phone:'',
  };
}

componentDidMount(){
  this.getContacts();
}

handleSearchTextChange =(event)=>{
  this.setState({
    searchText: event.target.value
  });
}

handleFirstNameChange =(event)=>{
  this.setState({
    firstName: event.target.value
  });
}

handleLastNameChange =(event)=>{
  this.setState({
    lastName: event.target.value
  });
}

handlePhoneChange =(event)=>{
  this.setState({
    phone: event.target.value
  });
}

saveContact = (contact) => {
  console.log(contact); 
    axios({
      method: 'POST',
      url: API_URL + '/api/contacts',
      headers: {
        'Api-Key': '1717820185',
        'Content-Type': 'application/json',
      },
      data: {
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
      },
    }).then((response) => {
      
      console.log(response);
      this.getContacts();
    })
    .catch((error) => {
      console.log(error, error.response);
    })
}

getContacts = () => {
    axios({
      method: 'GET',
      url: API_URL + '/api/contacts',
      headers: {
        'Api-Key': '1717820185',
      },
    }).then((response) => {
        console.log(response);
        this.setState({ contacts: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }


render() {
   const contacts = this.state.contacts.filter(contact => {
      if (contact.firstName.indexOf(this.state.searchText) > -1) {
        return true;
      }
      if (contact.lastName.indexOf(this.state.searchText) > -1) {
        return true;
      }
      return false;
    });

    return (
      <div>
	  <Header title="Address-book"/>
	  <div className="container">
		<div  className="row">
			<div className="col-sm-6">
				<SearchBox 
					value={this.state.searchText}
					onChange={this.handleSearchTextChange}
				/>
        <ContactList
            contacts={contacts}
        />
			</div>
			<div className="col-sm-6">
				<h1>Nuevo Contacto</h1>
      <ContactForm 
				firstName={this.state.firstName}
				lastName={this.state.lastName}
				phone={this.state.phone}
				handleFirstNameChange={this.handleFirstNameChange}
				handleLastNameChange={this.handleLastNameChange}
				handlePhoneChange={this.handlePhoneChange}
				saveContact={this.saveContact}
			/>
			</div>

		</div>
	  </div>
	  
	  <Footer copyright="Copyright 2017-PUCE"/>
	  </div>
    );
  }
}

export default App;
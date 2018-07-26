import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      marital: '',
    };
    this.input = React.createRef();
    this.handleSaveSubmit = this.handleSaveSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSaveSubmit(e) {
    e.preventDefault();
    const newProfile = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
      marital: this.state.marital
    }

    this.setState(prevState => ({
      profile: prevState.profile.concat(newProfile)
    }))
    this.setState({firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    marital: ''})
  };

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  } 



  render() {
    const { firstName, lastName, email, phone, gender, marital } = this.state;
    return (
      <div className="contanier">
        <form className="Formdiv" onSubmit={this.handleSaveSubmit}>

          <h1> CONTACT FORM </h1>
          <p> First Name:  <input width="100px" type="text" value={firstName} onChange={this.handleChange('firstName')} isRequired /> </p>
          <p> Last Name: <input width="100px" type="text" value={lastName} onChange={this.handleChange('lastName')} /> </p>
          <p> Email Address: <input width="100px" type="text" value={email} onChange={this.handleChange('email')} /> </p>
          <p> Phone Number: <input width="100px" type="Number" value={phone} onChange={this.handleChange('phone')} /></p>
          <p> Gender: <input width="100px" type="text" value={gender} onChange={this.handleChange('gender')} /> </p>
          <p> Marital Status: <input width="100px" type="text" value={marital} onChange={this.handleChange('marital')} /> </p>
          <br />
          <br />
          <button> Save Details </button> &nbsp; &nbsp;
        </form>
        <ContactView profile={this.state.profile} />
      </div>
    );
  }
}

class ContactView extends Component {
  render() {
    return (
      <Table className="tablediv" hover profile={this.props.profile}>
        <thead>
          <tr>
            <th> First Name</th>
            <th> Last Name</th>
            <th> Email Address</th>
            <th> Phone Number</th>
            <th> Gender</th>
            <th> Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.profile.map(
            prof => (
              <tr key={prof.id}>
                <td>{prof.firstName}</td>
                <td>{prof.lastName}</td>
                <td>{prof.email}</td>
                <td>{prof.phone}</td>
                <td>{prof.gender}</td>
                <td>{prof.marital}</td>
              </tr>
            )
          )}
        </tbody>

      </Table>
    );
  }
}

export default Contact;

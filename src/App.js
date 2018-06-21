import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Collapse from './collapse'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoad: false,
      contacts: []
    };
  }

  clickToSpin = () => {
    this.setState({
      isLoad: !this.state.isLoad
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.clickToSpin();
    
    fetch('https://randomuser.me/api/?results=50&nat=us')
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          location: `${user.location.city}`,
          address: `${user.location.street}`,
          email: `${user.email}` 
      })))
      .then(contacts => this.setState({
        contacts,
        isLoad: false
      }))
      .catch(err => console.log("parsing failed", err))
  }


  render() {
    return (
      <div className={`App ${this.state.isLoad ? "is-loading" : ""}`} >
        <header>
          <h2>Collapse and fetching</h2>
          <h3>Fetch now<div className="btn btn-sm btn-danger">Fetch</div></h3>
        </header>
        <div className="content">
          <div className="group">
          { !this.state.isLoad && this.state.contacts.length > 0 ? this.state.contacts.map((e,i) => {
            return (
              <Collapse 
              title={e.name}
              text={e.location}
              address={e.address}
              mail={e.email}
              />
            );
          }) : null}
          </div>
        </div>
        <div className="loader">
            <div className="icon">
            </div>
        </div>
      </div>
    );
  }
}

export default App;

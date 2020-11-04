import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from "axios";

import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

import Search from "./pages/Search";
import Info from "./pages/Info";

import './App.css';

class App extends Component {
  state = {
    input: ''
  }

  searchCompany = input => {
    axios.get(`https://api.yelp.com/v3/businesses/search?term=${this.state.input}&latitude=${process.env.REACT_APP_NAPERVILLE_LAT}&longitude=${process.env.REACT_APP_NAPERVILLE_LON}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    }).then(response => {
      console.log("Response: ", response);
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Naperville Business Search</Navbar.Brand>
            <Form inline>
              <FormControl type="text" placeholder="Search company name" className="mr-sm-2" />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar>
          <div className="whole-page">
            <Route exact path="/" component={Search} />
            <Route path="/info" component={Info} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
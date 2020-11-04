import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import axios from "axios";

import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

import Search from "./pages/Search";
import Details from "./pages/Details";

import './App.css';

class App extends Component {
  state = {
    input: '',
    search_results: [],
    selected_business_id: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ input: value });
  }

  searchBusiness = e => {
    e.preventDefault();
    axios.get("https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/search?term=${this.state.input}&latitude=${process.env.REACT_APP_NAPERVILLE_LAT}&longitude=${process.env.REACT_APP_NAPERVILLE_LON}`, {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response => {
      console.log("Business search results response: ", response);
      this.setState({ search_results: response.data.businesses });
    })
  }

  searchDetails = businessID => {
    axios.get("https://cors-anywhere.herokuapp.com/" + `https://api.yelp.com/v3/businesses/${businessID}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    }).then(response => {
      console.log("Business details response: ", response);
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Naperville Business Search</Navbar.Brand>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search business name"
                className="mr-sm-2"
                value={this.state.input}
                onChange={this.handleInputChange}
              />
              <Button
                variant="primary"
                onClick={this.searchBusiness}
              >Search</Button>
            </Form>
          </Navbar>
          <div className="whole-page">
            <Route
              path="/yelp-app"
              render={props=>(<Search {...props} searchResults={this.state.search_results}/>)}
            />
            <Route
              path="/yelp-app/info"
              render={props=>(<Details {...props} selectedBusinessId={this.state.selected_business_id}/>)} />
            <Route path="/"><Redirect to="/yelp-app"/></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
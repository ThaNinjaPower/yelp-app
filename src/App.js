import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";

import axios from "axios";

import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

import Search from "./pages/Search";
import Details from "./pages/Details";

import './App.css';

class App extends Component {
  state = {
    input: '',
    search_results: [],
    selected_business_id: '',
    business_id_details: {}
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ input: value });
  }

  searchBusiness = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.input}&latitude=${process.env.REACT_APP_NAPERVILLE_LAT}&longitude=${process.env.REACT_APP_NAPERVILLE_LON}`, {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
      }
    }).then(response => {
      this.setState({ selected_business_id: '', business_id_details: {} });
      console.log("Business search results response: ", response);
      this.setState({ search_results: response.data.businesses });
    })
  }

  searchDetails = businessID => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessID}`, {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    }).then(response => {
      console.log("Business details response: ", response);
      this.setState({ business_id_details: response.data });
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
              <Link to="/search" onClick={this.searchBusiness}>
              {/* <Button
                  variant="primary"
                  onClick={this.searchBusiness}
                >Search</Button> */}
                Search
              </Link>
            </Form>
          </Navbar>
          <div className="whole-page">
            <Route
              path="/search"
              render={searchProps => (<Search {...searchProps} searchResults={this.state.search_results} searchDetails={this.searchDetails} />)}
            />
            <Route
              path="/details"
              render={detailProps => (<Details {...detailProps} businessDetails={this.state.business_id_details} />)}
            />
            <Route exact path="/">
              <Redirect to="/search"/>
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
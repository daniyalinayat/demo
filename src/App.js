import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { Button } from "semantic-ui-react";

import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import ListOfRecordsContainer from "./containers/listOfrecords";
import AddRecordsContainer from "./containers/addRecords";
import EditRecordsContainer from "./containers/editRecords";
import firebase from "./fireabase";
import SignInContainer from "./containers/signIn";
import SignUpContainer from "./containers/signUp";

//import ListOfRecordsContainer from "./containers/listOfrecords";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <Route exact path='/signIn' component={SignInContainer} />
        <Route exact path='/signUp' component={SignUpContainer} />
        <Route exact path='/add-record' component={AddRecordsContainer} />
        <Route exact path='/edit-record' component={EditRecordsContainer} />
        <Route exact path='/view-record' component={ListOfRecordsContainer} />
      </div>
    );
  }
}

export default App;

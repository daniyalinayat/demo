import React, { Component } from "react";
import ListOfRecords from "../components/records/listOfRecord";
import { Button, Card, Image } from "semantic-ui-react";
import firebase from "firebase";
class ListOfRecordsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], messages: [], items: [] };
  }

  componentDidMount() {
    const usersRef = firebase.database().ref("users");
    usersRef.on("value", snapshot => {
      let users = snapshot.val();
      let newState = [];
      for (let user in users) {
        newState.push({
          id: user,
          email: users[user].email,
          name: users[user].name,
          contact: users[user].contact
        });
      }
      this.setState({
        users: newState
      });
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <ul>
          {this.state.users.map(item => {
            return (
              <li key={item.id}>
                <ListOfRecords
                  id={item.id}
                  email={item.email}
                  name={item.name}
                  contact={item.contact}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListOfRecordsContainer;

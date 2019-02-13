import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import firebase from "firebase";
class AddRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: ""
    };
  }
  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleChangeContact = e => {
    this.setState({
      contact: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact
    };
    firebase
      .database()
      .ref("users")
      .push(user);

    this.setState({
      name: "",
      email: "",
      contact: ""
    });
  };
  render() {
    return (
      <div>
        <h2> Add Records</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              type='text'
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder='Email'
              type='text'
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </Form.Field>
          <Form.Field>
            <label>Contact</label>
            <input
              placeholder='Contact'
              type='text'
              value={this.state.contact}
              onChange={this.handleChangeContact}
            />
          </Form.Field>

          <Button type='submit'>Add</Button>
        </Form>
      </div>
    );
  }
}

export default AddRecords;

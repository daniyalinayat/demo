import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class EditRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: ""
    };
  }
  componentDidMount() {}
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
  // handleChangePassword = e => {
  //   this.setState({
  //     password: e.target.value
  //   });
  // };
  // handleChangeConfirmPassword = e => {
  //   this.setState({
  //     confirmPassword: e.target.value
  //   });
  // };
  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.name + this.state.email + this.state.contact);
  };
  render() {
    return (
      <div>
        <h2> Edit Records</h2>
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

export default EditRecords;

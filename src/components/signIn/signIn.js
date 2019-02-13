import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.email + this.state.password);
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          height: "350px",
          top: "20%",
          left: "3%"
        }}>
        <Form onSubmit={this.handleSubmit}>
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
            <label>Password</label>
            <input
              placeholder='Password'
              type='text'
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </Form.Field>

          <Button type='submit'>Login</Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;

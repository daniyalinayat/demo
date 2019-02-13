import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

import fire from "firebase";

import firebase, { auth, provider } from "firebase";
import app from "firebase/app";
import "firebase/auth";
import { storage } from "firebase";

// var imageName = "";
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
      imageURL: "",
      user: null,
      url: ""
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
  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleChangeConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    });
  };

  handleChangeImage = e => {
    const image = e.target.files[0];
    this.setState(() => ({ image }));
  };
  // doCreateUserWithEmailAndPassword = (email, password) =>
  //   this.auth.createUserWithEmailAndPassword(email, password);
  handleSubmit = filename => {
    filename.preventDefault();

    // const { image } = this.state;
    // const uploadTask = storage.ref("image/${image.name}").put(image);
    // uploadTask.on(
    //   "state_changed",
    //   snapshot => {

    //   },
    //   error => {
    //     // error function ....
    //     console.log(error);
    //   },
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then(url => {
    //         console.log(url);
    //       });
    //   }
    // );
    //tutorial 2
    // this.setState({ image: filename });
    // fire.storage
    //   .ref("images")
    //   .child(filename)
    //   .getDownloadURL()
    //   .then(url =>
    //     this.setState({
    //       imageURL: url
    //     })
    //   );
    //end
    // fire
    //   .auth()
    //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(u => {})
    //   .catch(error => {
    //     console.log(error);
    //   });
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(u => {})
    //   .catch(error => {
    //     console.log(error);
    //   });
    /// const imagesRef = storageRef.child("images");
    //const image = storageRef.child(imageName);
    //storage.ref
    // this.auth.createUserWithEmailAndPassword(email, password);

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    firebase
      .database()
      .ref("users")
      .push(user);
    // image.put(file).then(function(snapshot) {
    //   console.log("file Uploaded");
    // });
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  fileSelectedHandler = e => {
    // const imagesRef = storageRef.child("images");
    //imageName = storageRef.child(e.target.files[0]);
    //console.log(imageName);
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          height: "350px",
          top: "20%",
          right: "3%"
          //backgroundColor: "black"
        }}>
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
            <label>Password</label>
            <input
              placeholder='Password'
              type='text'
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              placeholder='Confirm Password'
              type='text'
              value={this.state.confirmPassword}
              onChange={this.handleChangeConfirmPassword}
            />
          </Form.Field>
          <input type='file' onChange={this.handleChangeImage} />
          <Button type='submit'>Login</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;

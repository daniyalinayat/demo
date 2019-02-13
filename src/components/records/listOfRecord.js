import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import firebase from "firebase";
import { Link } from "react-router-dom";
class ListOfRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeItem = this.removeItem.bind(this);
  }
  removeItem(itemId) {
    console.log("hello");
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
    const { param } = this.props;
    return (
      <div>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                //src='/images/avatar/large/steve.jpg'
              />
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Meta>{this.props.contact}</Card.Meta>
              <Card.Description>
                {/* Steve wants to add you to the group{" "}
                <strong>best friends</strong> */}
                {this.props.email}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  <Link to='/edit-record'>Edit</Link>
                </Button>
                <Button
                  basic
                  color='red'
                  onClick={this.removeItem(this.props.id)}>
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default ListOfRecords;

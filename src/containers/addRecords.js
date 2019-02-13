import React, { Component } from "react";
import AddRecords from "../components/addRecords/addRecords";

class AddRecordsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ position: "absolute", top: "20%", left: "40%" }}>
        <AddRecords />
      </div>
    );
  }
}

export default AddRecordsContainer;

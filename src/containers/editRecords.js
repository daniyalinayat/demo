import React, { Component } from "react";
import EditRecords from "../components/editRecords/editRecords";

class EditRecordsContainer extends Component {
  state = {};
  render() {
    return (
      <div style={{ position: "absolute", top: "20%", left: "40%" }}>
        <EditRecords />
      </div>
    );
  }
}

export default EditRecordsContainer;

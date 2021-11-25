import React, { Component } from "react";
import "./preview.css";

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { firstName, lastName, jobTitle, address, phone, description } =
      this.props.information.generalInformation;
    console.log(this.props);
    console.log(firstName);
    return (
      <div className="preview-content">
        <div className="header-preview">
          <div className="name-preview">
            <h3>{firstName} </h3>&nbsp; <h3>{lastName}</h3>
          </div>
          <div className="job-preview"><h3>{jobTitle}</h3></div>
        </div>
        <div className="second-header-preview"></div>
        <div className="general-info">
          <h1>{address}</h1>
          <h1>{phone}</h1>
          <h1>{description}</h1>
        </div>
      </div>
    );
  }
}

export default Preview;

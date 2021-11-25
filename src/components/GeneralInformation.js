import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { handleFirstName, handleLastName, handleJobTitle, handleAddress, handlePhone, handleDescription} =
      this.props.handleGeneralInformation;
    const { firstName, lastName, jobTitle, address, phone, description} = this.props;
    return (
      <div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstName}
          ></input>
        </div>
        <div>
        <label>Last Name</label>
          <input type="text" value={lastName} onChange={handleLastName}></input>
        </div>
        <div>
          <label>Job Title</label>
          <input type="text" value={jobTitle} onChange={handleJobTitle}></input>
        </div>
        <div>
          <label>Address</label>
          <input type="text" value={address} onChange={handleAddress}></input>
        </div>
        <div>
          <label>Phone</label>
          <input type="text" value={phone} onChange={handlePhone}></input>
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={handleDescription}></input>
        </div>
      </div>
    );
  }
}

export default GeneralInformation;

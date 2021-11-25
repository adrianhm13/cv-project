import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      handleFirstName,
      handleLastName,
      handleJobTitle,
      handleAddress,
      handlePhone,
      handleDescription,
    } = this.props.handleGeneralInformation;
    const { firstName, lastName, jobTitle, address, phone, description } =
      this.props;
    return (
      <div>
        <div className="title-section">
          <h3>General Information</h3>
        </div>
        <div className="inputs">
          <div>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstName}
              placeholder="First Name"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              onChange={handleLastName}
              placeholder="Last Name"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={jobTitle}
              onChange={handleJobTitle}
              placeholder="Job Title"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={address}
              onChange={handleAddress}
              placeholder="Address"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={phone}
              onChange={handlePhone}
              placeholder="Phone"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={description}
              onChange={handleDescription}
              placeholder="Description"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInformation;

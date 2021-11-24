import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  render() {
    const { handleFirstName, handleLastName } =
      this.props.handleGeneralInformation;
    const { firstName, lastName } = this.props;
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
      </div>
    );
  }
}

export default GeneralInformation;

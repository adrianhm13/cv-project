import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { firstName, lastName, jobTitle, address, phone, description} = this.props.information.generalInformation;
    console.log(this.props);
    console.log(firstName);
    return (
      <div>
        <div>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
          <h1>{jobTitle}</h1>
          <h1>{address}</h1>
          <h1>{phone}</h1>
          <h1>{description}</h1>
        </div>
      </div>
    );
  }
}

export default Preview;

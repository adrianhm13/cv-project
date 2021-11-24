import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { firstName, lastName } = this.props.information.generalInformation;
    console.log(this.props);
    console.log(firstName);
    return (
      <div>
        <div>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
        </div>
      </div>
    );
  }
}

export default Preview;

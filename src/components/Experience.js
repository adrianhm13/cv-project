import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const handleExperience = this.props.handleExperience;
    return (
      <div>
        <div className="title-section">
          <h3>Experience</h3>
        </div>
        <ExperienceFields handleExperience={handleExperience} />
      </div>
    );
  }
}

class ExperienceFields extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const handlePosition = this.props.handlePosition;
    const { position } = this.props;
    return (
      <div>
        <div className="inputs">
          <div>
            <input
              type="text"
              value={position}
              onChange={handlePosition}
              placeholder="Position"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;

import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const handleExperience = this.props.handleExperience;
    const experienceInfo = this.props.experienceInfo;
    const index = this.props.index
    return (
      <div>
        <ExperienceFields handleExperience={handleExperience} experienceInfo={experienceInfo} index={index}/>
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
    const {handlePosition, handleCompany, handleCity, handleDateFrom, handleDateTo, handleDelete} = this.props.handleExperience;
    const { position, company, city, dateFrom, dateTo, key } = this.props.experienceInfo;
    const index = this.props.index;
    return (
        <div className="inputs">
          <div>
            <input
              type="text"
              value={position}
              onChange={handlePosition(index)}
              placeholder="Position"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={company}
              onChange={handleCompany(index)}
              placeholder="Company"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={city}
              onChange={handleCity(index)}
              placeholder="City"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={dateFrom}
              onChange={handleDateFrom(index)}
              placeholder="Date From"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={dateTo}
              onChange={handleDateTo(index)}
              placeholder="Date To"
            ></input>
          </div>
          <div><button onClick={()=> handleDelete(index)}>Delete</button></div>
        </div>
    );
  }
}

export default Experience;

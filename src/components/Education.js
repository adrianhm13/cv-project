import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const handleEducation = this.props.handleEducation;
    const educationInfo = this.props.educationInfo;
    const index = this.props.index;
    return (
      <div>
        <EducationFields
          handleEducation={handleEducation}
          educationInfo={educationInfo}
          index={index}
        />
      </div>
    );
  }
}

class EducationFields extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      handleUniversity,
      handleCity,
      handleDegree,
      handleDateFrom,
      handleDateTo,
      handleDelete,
    } = this.props.handleEducation;
    const { university, city, degree, dateFrom, dateTo } =
      this.props.educationInfo;
    const index = this.props.index;
    return (
      <div className="inputs">
        <div>
          <input
            type="text"
            value={university}
            onChange={handleUniversity(index)}
            placeholder="University"
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
            value={degree}
            onChange={handleDegree(index)}
            placeholder="Degree"
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
        <div>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Education;

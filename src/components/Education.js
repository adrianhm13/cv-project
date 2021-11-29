import React from "react";

const Education = props => {
  const handleEducation = props.handleEducation;
  const educationInfo = props.educationInfo;
  const index = props.index;
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

const EducationFields = props => {
  const {
    handleUniversity,
    handleCity,
    handleDegree,
    handleDateFrom,
    handleDateTo,
    handleDelete,
  } = props.handleEducation;
  const { university, city, degree, dateFrom, dateTo } =
    props.educationInfo;
  const index = props.index;
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


export default Education;

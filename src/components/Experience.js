import React from "react";

const Experience = props => {
  const handleExperience = props.handleExperience;
  const experienceInfo = props.experienceInfo;
  const index = props.index;
  console.log("Experience Info", experienceInfo)
  return (
    <div>
      <ExperienceFields
        handleExperience={handleExperience}
        experienceInfo={experienceInfo}
        index={index}
      />
    </div>
  );
}

const ExperienceFields = props => {
  const {
    handlePosition,
    handleCompany,
    handleCity,
    handleDateFrom,
    handleDateTo,
    handleDelete,
  } = props.handleExperience;
  console.log(props.experienceInfo)
  const { position, company, city, dateFrom, dateTo, key } =
    props.experienceInfo;
    console.log(position)
  const index = props.index;
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
      <div>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    </div>
  );
}


export default Experience;

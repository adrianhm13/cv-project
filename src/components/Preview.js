import React from "react";
import "./preview.css";

const Preview = props => {
  const {
    firstName,
    lastName,
    jobTitle,
    address,
    phone,
    description,
    email,
    linkedin,
  } = props.information;

  const experienceList = props.experience;
  const educationList = props.education;

  return (
    <div className="preview">
      <div id="test" className="preview-content">
        <div className="header-preview">
          <div className="name-preview">
            <h3>{firstName} </h3>&nbsp; <h3>{lastName}</h3>
          </div>
          <div className="job-preview">
            <h3>{jobTitle}</h3>
          </div>
        </div>
        <div className="second-header-preview">
          <div className="shc-preview">
            <div className="shcc-preview">
              <i className="far fa-envelope"></i>
              {email}
            </div>
          </div>
          <div className="shc-preview">
            <div className="shcc-preview">
              <i className="fas fa-phone"></i>
              {phone}
            </div>
          </div>
          <div className="shc-preview">
            <div className="shcc-preview">
              <i className="fas fa-map-marker"></i>
              {address}
            </div>
          </div>
          <div className="shc-preview">
            <div className="shcc-preview">
              <i className="fab fa-linkedin-in"></i>
              {linkedin}
            </div>
          </div>
        </div>
        <SubTitle subtitle="Experience" />
        <ExperiencePreview experience={experienceList} />
        <SubTitle subtitle="Education" />
        <EducationPreview education={educationList} />
      </div>
    </div>
  );
}

const ExperiencePreview = props => {
  const experience = props.experience;
  const listExperience = experience.map((element) => {
    console.log(element);
    return (
      <div key={element.id} className="experience-container-preview">
        <div className="experience-detail">{element.position}</div>
        <div className="experience-detail">{element.company},</div>
        <div className="experience-detail">
          {element.dateFrom} - {element.dateTo}
        </div>
        <div className="experience-detail">{element.city}</div>
      </div>
    );
  });

  return <div>{listExperience}</div>;
}

const EducationPreview = props => {
  const educationList = props.education;
  const listEducation = educationList.map((element) => {
    const { university, city, degree, dateFrom, dateTo } = element;
    return (
      <div key={element.id} className="experience-container-preview">
        <div className="experience-detail">{university},</div>
        <div className="experience-detail">{degree}</div>
        <div className="experience-detail">{city}</div>
        <div className="experience-detail">
          {dateFrom} - {dateTo}
        </div>
      </div>
    );
  });

  return <div>{listEducation}</div>;
}


const SubTitle = props => {
  return (
    <div className="subtitle-preview">
      <h3>{props.subtitle}</h3>
      <hr></hr>
    </div>
  );
}

export default Preview;

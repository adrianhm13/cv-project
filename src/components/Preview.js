import React, { Component } from "react";
import "./preview.css";

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      address,
      phone,
      description,
      email,
      linkedin,
    } = this.props.information.generalInformation;

    const { experienceList, educationList } = this.props.information;

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
          <ExperiencePreview experienceInfo={experienceList} />
          <SubTitle subtitle="Education" />
          <EducationPreview educationInfo={educationList} />
        </div>
      </div>
    );
  }
}

class ExperiencePreview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props);
    const experienceList = this.props.experienceInfo;
    const listExperience = experienceList.map((element) => {
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
}
class EducationPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const educationList = this.props.educationInfo;
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
}

function SubTitle(props) {
  return (
    <div className="subtitle-preview">
      <h3>{props.subtitle}</h3>
      <hr></hr>
    </div>
  );
}

export default Preview;

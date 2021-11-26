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
    console.log(this.props);
    console.log(firstName);
    return (
      <div className="preview-content">
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
        <SubTitle subtitle="Experience"/>
        <div className="experience-container-preview">
          
        </div>
      </div>
    );
  }
}

export class ExperiencePreview extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

function SubTitle(props) {
  return (
    <div className="subtitle-preview">
      <h3>{props.subtitle}</h3><hr></hr>
    </div>
  )
}


export default Preview;

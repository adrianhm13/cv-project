import React from "react";

const GeneralInformation = props => {
  const {
    handleFirstName,
    handleLastName,
    handleJobTitle,
    handleAddress,
    handlePhone,
    handleEmail,
    handleLinkedin,
  } = props.handleGeneralInformation;
  const {
    firstName,
    lastName,
    jobTitle,
    address,
    phone,
    email,
    linkedin,
  } = props.generalInformation;
  return (
    <div>
      <div className="title-section">
        <h3>General Information</h3>
      </div>
      <div className="inputs">
        <div>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstName}
            placeholder="First Name"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={handleLastName}
            placeholder="Last Name"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={jobTitle}
            onChange={handleJobTitle}
            placeholder="Job Title"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={address}
            onChange={handleAddress}
            placeholder="Address"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={phone}
            onChange={handlePhone}
            placeholder="Phone"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={linkedin}
            onChange={handleLinkedin}
            placeholder="Linkedin"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;

import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import React, { Component, useState } from "react";
import Preview from "./components/Preview";
import Experience from "./components/Experience";
import Education from "./components/Education";
import uniqid from "uniqid";
import html2pdf from "html2pdf.js";

const AppFunctional = () => {
  const [generalInformation, setGeneralInformation] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    linkedin: "",
  });
  const [experienceList, setExperienceList] = useState([
    {
      position: "",
      company: "",
      city: "",
      dateFrom: "",
      dateTo: "",
      id: uniqid(),
    },
  ]);
  const [educationList, setEducationList] = useState([
    {
      university: "",
      city: "",
      degree: "",
      dateFrom: "",
      dateTo: "",
      id: uniqid(),
    },
  ]);

  const handleGeneralInformation = {
    handleFirstName: (e) => {
      setGeneralInformation((generalInformation) => ({
        ...generalInformation,
        firstName: e.target.value,
      }));
    },
    handleLastName: (e) => {
      setGeneralInformation((generalInformation) => ({
        ...generalInformation,
        lastName: e.target.value,
      }));
    },
    handleJobTitle: (e) => {
      setGeneralInformation((generalInformation) => ({
        ...generalInformation,
        jobTitle: e.target.value,
      }));
    },
    handleAddress: (e) => {
      setGeneralInformation((generalInformation) => ({
        ...generalInformation,
        address: e.target.value,
      }));
    },
    handlePhone: (e) => {
      setGeneralInformation((generalInformation) => ({
        ...generalInformation,
        phone: e.target.value,
      }));
    },
    handleEmail: (e) => {
      setGeneralInformation((generalInformation) => ({
        ...generalInformation,
        email: e.target.value,
      }));
    },
    handleLinkedin: (e) => {
      setGeneralInformation((generalInformation) => ({
        ...generalInformation,
        linkedin: e.target.value,
      }));
    },
  };
  const handleExperience = {
    handlePosition: (index) => (e) => {
      let position = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList));
      copyExperienceList[index].position = position;
      setExperienceList(copyExperienceList);
    },
    handleCompany: (index) => (e) => {
      let company = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList));
      copyExperienceList[index].company = company;
      setExperienceList(copyExperienceList);
    },
    handleCity: (index) => (e) => {
      let city = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList));
      copyExperienceList[index].city = city;
      setExperienceList(copyExperienceList);
    },
    handleDateFrom: (index) => (e) => {
      let dateFrom = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList));
      copyExperienceList[index].dateFrom = dateFrom;
      setExperienceList(copyExperienceList);
    },
    handleDateTo: (index) => (e) => {
      let dateTo = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList));
      copyExperienceList[index].dateTo = dateTo;
      setExperienceList(copyExperienceList);
    },
    handleDelete: (index) => {
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList));
      const prevExperienceList = copyExperienceList.slice(0, index);
      const postExperienceList = copyExperienceList.slice(index + 1);
      const newExperienceList = [...prevExperienceList, ...postExperienceList];
      setExperienceList(newExperienceList);
    },
  };

  const handleEducation = {
    handleUniversity: (index) => (e) => {
      let university = e.target.value;
      const copyEducationList = JSON.parse(JSON.stringify(educationList));
      copyEducationList[index].university = university;
      setEducationList(copyEducationList);
    },
    handleDegree: (index) => (e) => {
      let degree = e.target.value;
      const copyEducationList = JSON.parse(JSON.stringify(educationList));
      copyEducationList[index].degree = degree;
      setEducationList(copyEducationList);
    },
    handleCity: (index) => (e) => {
      let city = e.target.value;
      const copyEducationList = JSON.parse(JSON.stringify(educationList));
      copyEducationList[index].city = city;
      setEducationList(copyEducationList);
    },
    handleDateFrom: (index) => (e) => {
      let dateFrom = e.target.value;
      const copyEducationList = JSON.parse(JSON.stringify(educationList));
      copyEducationList[index].dateFrom = dateFrom;
      setEducationList(copyEducationList);
    },
    handleDateTo: (index) => (e) => {
      let dateTo = e.target.value;
      const copyEducationList = JSON.parse(JSON.stringify(educationList));
      copyEducationList[index].dateTo = dateTo;
      setEducationList(copyEducationList);
    },
    handleDelete: (index) => {
      const copyEducationList = JSON.parse(JSON.stringify(educationList));
      const prevEducationList = copyEducationList.slice(0, index);
      const postEducationList = copyEducationList.slice(index + 1);
      const newEducationList = [...prevEducationList, ...postEducationList];
      setEducationList(newEducationList);
    },
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        position: "",
        company: "",
        city: "",
        dateFrom: "",
        dateTo: "",
        id: uniqid(),
      },
    ]);
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        university: "",
        city: "",
        degree: "",
        dateFrom: "",
        dateTo: "",
        id: uniqid(),
      },
    ]);
  };
  
  const AddSubTitle = (props) => {
    return (
      <div className="title-section">
        <h3>{props.title}</h3>
      </div>
    );
  };

  const loadExample = () => {
    setGeneralInformation({
      firstName: "Joseph",
      lastName: "Dinae Trinity",
      jobTitle: "Developer",
      address: "Roadcross, 59, Manhattan",
      phone: "+31 6 61223045",
      email: "joseph.dinae@gmail.com",
      linkedin: "Joseph Dinae Trinity",
    });
    setExperienceList([
      {
        position: "Full Stack Developer",
        company: "The One",
        city: "Panatrae",
        dateFrom: "2020",
        dateTo: "2021",
        id: uniqid(),
      },
      {
        position: "Front End Developer",
        company: "Thae Gen",
        city: "Talaener",
        dateFrom: "2018",
        dateTo: "2020",
        id: uniqid(),
      },
    ]);
    setEducationList([
      {
        university: "Weathon College",
        city: "Illinois",
        degree: "Computer Science",
        dateFrom: "2014",
        dateTo: "2018",
        id: uniqid(),
      },
    ]);
  };

  const printPdf = () => {
    var element = document.getElementById("test");
    var opt = {
      margin: 0,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
  };
  return (
    <div className="App">
      <div className="header">
        <h1>CV Creator</h1>
      </div>
      <div className="content">
        <div className="edit-information">
          <GeneralInformation
            handleGeneralInformation={handleGeneralInformation}
            generalInformation={generalInformation}
          />
          <div>
            <AddSubTitle title="Experience" />
            {experienceList.map((element, index) => {
              return (
                <div key={element.id}>
                  <Experience
                    handleExperience={handleExperience}
                    experienceInfo={experienceList[index]}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={addExperience}>Add</button>
          <div>
            <AddSubTitle title="Education" />
            {educationList.map((element, index) => {
              return (
                <div key={element.id}>
                  <Education
                    handleEducation={handleEducation}
                    educationInfo={educationList[index]}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={addEducation}>Add</button>
          <div className="buttons-section">
            <button onClick={loadExample}>Load Example</button>
            <button onClick={printPdf}>Generate PDF</button>
          </div>
        </div>

        <Preview
          className="preview"
          information={generalInformation}
          experience={experienceList}
          education={educationList}
        />
      </div>
    </div>
  );
};

export default AppFunctional;

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
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    city: "",
    dateFrom: "",
    dateTo: "",
    id: uniqid(),
  });
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
  const [education, setEducation] = useState({
    university: "",
    city: "",
    degree: "",
    dateFrom: "",
    dateTo: "",
    id: uniqid(),
  });

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
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList[index]))
      copyExperienceList.position = position;
      setExperienceList(([copyExperienceList]));
    },
    handleCompany: (index) => (e) => {
      let company = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList[index]))
      copyExperienceList.company = company;
      setExperienceList(([copyExperienceList]));
    },
    handleCity: (index) => (e) => {
      let city = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList[index]))
      copyExperienceList.city = city;
      setExperienceList(([copyExperienceList]));
    },
    handleDateFrom: (index) => (e) => {
      let dateFrom = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList[index]))
      copyExperienceList.dateFrom = dateFrom;
      setExperienceList(([copyExperienceList]));
    },
    handleDateTo: (index) => (e) => {
      let dateTo = e.target.value;
      const copyExperienceList = JSON.parse(JSON.stringify(experienceList[index]))
      copyExperienceList.dateTo = dateTo;
      setExperienceList(([copyExperienceList]));
    },
    handleDelete: (index) => {
      const experienceList = this.state.experienceList;
      const prevExperienceList = experienceList.slice(0, index);
      const postExperienceList = experienceList.slice(index + 1);
      const newExperienceList = [...prevExperienceList, ...postExperienceList];
      this.setState({ experienceList: newExperienceList });
    },
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
          {/* <button onClick={this.addExperience}>Add</button>
          <div>
            <AddSubTitle title="Education" />
            {this.state.educationList.map((element, index) => {
              return (
                <div key={element.id}>
                  <Education
                    handleEducation={this.handleEducation}
                    educationInfo={this.state.educationList[index]}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={this.addEducation}>Add</button>
          <div className="buttons-section">
            <button onClick={this.loadExample}>Load Example</button>
            <button onClick={this.printPdf}>Generate PDF</button>
          </div>
        </div>

        <Preview className="preview" information={this.state} /> */}
      </div>
      </div>
    </div>
  );
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInformation: {
        firstName: "",
        lastName: "",
        jobTitle: "",
        address: "",
        phone: "",
        email: "",
        linkedin: "",
      },
      experienceList: [
        {
          position: "",
          company: "",
          city: "",
          dateFrom: "",
          dateTo: "",
          id: uniqid(),
        },
      ],
      experience: {
        position: "",
        company: "",
        city: "",
        dateFrom: "",
        dateTo: "",
        id: uniqid(),
      },
      educationList: [
        {
          university: "",
          city: "",
          degree: "",
          dateFrom: "",
          dateTo: "",
          id: uniqid(),
        },
      ],
      education: {
        university: "",
        city: "",
        degree: "",
        dateFrom: "",
        dateTo: "",
        id: uniqid(),
      },
    };
  }
  handleGeneralInformation = {
    handleFirstName: (e) => {
      this.setState((prevState) => ({
        generalInformation: {
          ...prevState.generalInformation,
          firstName: e.target.value,
        },
      }));
    },
    handleLastName: (e) => {
      this.setState((prevState) => ({
        generalInformation: {
          ...prevState.generalInformation,
          lastName: e.target.value,
        },
      }));
    },
    handleJobTitle: (e) => {
      this.setState((prevState) => ({
        generalInformation: {
          ...prevState.generalInformation,
          jobTitle: e.target.value,
        },
      }));
    },
    handleAddress: (e) => {
      this.setState((prevState) => ({
        generalInformation: {
          ...prevState.generalInformation,
          address: e.target.value,
        },
      }));
    },
    handlePhone: (e) => {
      this.setState((prevState) => ({
        generalInformation: {
          ...prevState.generalInformation,
          phone: e.target.value,
        },
      }));
    },
    handleEmail: (e) => {
      this.setState((prevState) => ({
        generalInformation: {
          ...prevState.generalInformation,
          email: e.target.value,
        },
      }));
    },
    handleLinkedin: (e) => {
      this.setState((prevState) => ({
        generalInformation: {
          ...prevState.generalInformation,
          linkedin: e.target.value,
        },
      }));
    },
  };

  handleExperience = {
    handlePosition: (index) => (e) => {
      let position = e.target.value;
      const experienceList = this.state.experienceList;
      experienceList[index].position = position;
      this.setState({ experienceList });
    },
    handleCompany: (index) => (e) => {
      let company = e.target.value;
      const experienceList = this.state.experienceList;
      experienceList[index].company = company;
      this.setState({ experienceList });
    },
    handleCity: (index) => (e) => {
      let city = e.target.value;
      const experienceList = this.state.experienceList;
      experienceList[index].city = city;
      this.setState({ experienceList });
    },
    handleDateFrom: (index) => (e) => {
      let dateFrom = e.target.value;
      const experienceList = this.state.experienceList;
      experienceList[index].dateFrom = dateFrom;
      this.setState({ experienceList });
    },
    handleDateTo: (index) => (e) => {
      let dateTo = e.target.value;
      const experienceList = this.state.experienceList;
      experienceList[index].dateTo = dateTo;
      this.setState({ experienceList });
    },
    handleDelete: (index) => {
      const experienceList = this.state.experienceList;
      const prevExperienceList = experienceList.slice(0, index);
      const postExperienceList = experienceList.slice(index + 1);
      const newExperienceList = [...prevExperienceList, ...postExperienceList];
      this.setState({ experienceList: newExperienceList });
    },
  };
  handleEducation = {
    handleUniversity: (index) => (e) => {
      let university = e.target.value;
      const educationList = this.state.educationList;
      educationList[index].university = university;
      this.setState({ educationList });
    },
    handleCity: (index) => (e) => {
      let city = e.target.value;
      const educationList = this.state.educationList;
      educationList[index].city = city;
      this.setState({ educationList });
    },
    handleDegree: (index) => (e) => {
      let degree = e.target.value;
      const educationList = this.state.educationList;
      educationList[index].degree = degree;
      this.setState({ educationList });
    },
    handleDateFrom: (index) => (e) => {
      let dateFrom = e.target.value;
      const educationList = this.state.educationList;
      educationList[index].dateFrom = dateFrom;
      this.setState({ educationList });
    },
    handleDateTo: (index) => (e) => {
      let dateTo = e.target.value;
      const educationList = this.state.educationList;
      educationList[index].dateTo = dateTo;
      this.setState({ educationList });
    },
    handleDelete: (index) => {
      const educationList = this.state.educationList;
      const prevEducationList = educationList.slice(0, index);
      const postEducationList = educationList.slice(index + 1);
      const newEducationList = [...prevEducationList, ...postEducationList];
      this.setState({ educationList: newEducationList });
    },
  };
  addExperience = () => {
    const newId = uniqid();
    this.setState({});
    this.setState(
      {
        experience: {
          position: "",
          company: "",
          city: "",
          dateFrom: "",
          dateTo: "",
          id: newId,
        },
      },
      () => {
        const newExperienceList = this.state.experienceList.concat(
          this.state.experience
        );
        this.setState({
          experienceList: newExperienceList,
        });
      }
    );
  };
  addEducation = () => {
    const newId = uniqid();
    this.setState({});
    this.setState(
      {
        education: {
          university: "",
          city: "",
          degree: "",
          dateFrom: "",
          dateTo: "",
          id: newId,
        },
      },
      () => {
        const newEducationList = this.state.educationList.concat(
          this.state.education
        );
        this.setState({
          educationList: newEducationList,
        });
      }
    );
  };
  loadExample = () => {
    this.setState({
      generalInformation: {
        firstName: "Joseph",
        lastName: "Dinae Trinity",
        jobTitle: "Developer",
        address: "Roadcross, 59, Manhattan",
        phone: "+31 6 61223045",
        email: "joseph.dinae@gmail.com",
        linkedin: "Joseph Dinae Trinity",
      },
      experienceList: [
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
      ],
      educationList: [
        {
          university: "Weathon College",
          city: "Illinois",
          degree: "Computer Science",
          dateFrom: "2014",
          dateTo: "2018",
          id: uniqid(),
        },
      ],
    });
  };
  printPdf = () => {
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
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>CV Creator</h1>
        </div>
        <div className="content">
          <div className="edit-information">
            <GeneralInformation
              handleGeneralInformation={this.handleGeneralInformation}
              generalInformation={this.state.generalInformation}
            />
            <div>
              <AddSubTitle title="Experience" />
              {this.state.experienceList.map((element, index) => {
                return (
                  <div key={element.id}>
                    <Experience
                      handleExperience={this.handleExperience}
                      experienceInfo={this.state.experienceList[index]}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
            <button onClick={this.addExperience}>Add</button>
            <div>
              <AddSubTitle title="Education" />
              {this.state.educationList.map((element, index) => {
                return (
                  <div key={element.id}>
                    <Education
                      handleEducation={this.handleEducation}
                      educationInfo={this.state.educationList[index]}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
            <button onClick={this.addEducation}>Add</button>
            <div className="buttons-section">
              <button onClick={this.loadExample}>Load Example</button>
              <button onClick={this.printPdf}>Generate PDF</button>
            </div>
          </div>

          <Preview className="preview" information={this.state} />
        </div>
      </div>
    );
  }
}

const AddSubTitle = (props) => {
  return (
    <div className="title-section">
      <h3>{props.title}</h3>
    </div>
  );
};

export default AppFunctional;

import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import React, { Component } from "react";
import Preview from "./components/Preview";
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
        description: "",
      }


    };
  }
  handleGeneralInformation =  {
    handleFirstName: (e) => {
      this.setState(prevState => ({
        generalInformation: {
          ...prevState.generalInformation,
          firstName: e.target.value,
        }
      }));
    },
    handleLastName: (e) => {
      this.setState(prevState => ({
        generalInformation: {
          ...prevState.generalInformation,
          lastName: e.target.value,
        }
      }));
    },
    handleJobTitle: (e) => {
      this.setState(prevState => ({
        generalInformation: {
          ...prevState.generalInformation,
          jobTitle: e.target.value,
        }
      }))
    },
    handleAddress: (e) => {
      this.setState(prevState => ({
        generalInformation: {
          ...prevState.generalInformation,
          address: e.target.value,
        }
      }))
    },
    handlePhone: (e) => {
      this.setState(prevState => ({
        generalInformation: {
          ...prevState.generalInformation,
          phone: e.target.value,
        }
      }))
    },
    handleDescription: (e) => {
      this.setState(prevState => ({
        generalInformation: {
          ...prevState.generalInformation,
          description: e.target.value,
        }
      }))
    },
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>CV Creator</h1>
        </div>
        <div className="content">
        <div className="edit-information">
          <GeneralInformation handleGeneralInformation={this.handleGeneralInformation} />
        </div>
        <div className="preview">
          <Preview information={this.state} />
        </div>
        </div>

      </div>
    );
  }
}

export default App;

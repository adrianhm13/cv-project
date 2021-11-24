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
      }


    };
  }
  handleGeneralInformation =  {
    handleFirstName: (e) => {
      this.setState({
        generalInformation: {
          firstName: e.target.value,
          lastName: this.state.generalInformation.lastName
        }
      });
    },
    handleLastName: (e) => {
      this.setState({
        generalInformation: {
          firstName: this.state.generalInformation.firstName,
          lastName: e.target.value
        }
      });
    },
  }

  render() {
    return (
      <div className="App">
        <div className="edit-information">
          Hee
          <GeneralInformation handleGeneralInformation={this.handleGeneralInformation} />
        </div>
        <div className="preview">
          <Preview information={this.state} />
        </div>
      </div>
    );
  }
}

export default App;

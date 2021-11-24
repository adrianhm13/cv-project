import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import React, { Component } from "react";
import Preview from "./components/Preview";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
    };
  }

  handleFirstName = (e) => {
    console.log("hu");
    this.setState({
      firstName: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <div className="edit-information">
          Hee
          <GeneralInformation
            handleFirstName={this.handleFirstName}
          ></GeneralInformation>
        </div>
        <div className="preview">
          <Preview firstName={this.state.firstName} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Employee from "./Employee";

class Home extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <h2 className="text-center">Home</h2>
        <Employee></Employee>
      </div>
    );
  }
}

export default Home;

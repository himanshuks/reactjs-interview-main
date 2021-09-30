import React, { Component } from "react";

class Employee extends Component {
  state = {
    id: 1,
    fname: "",
    lname: "",
    dob: "",
    designation: "",
    photoURL: "",
    experience: "",
    employeeList: [],
  };

  addEmployee = () => {
    console.log("add employee called...");
    let employee = {
      id: this.state.id,
      fname: this.state.fname,
      lname: this.state.lname,
      dob: this.state.dob,
      designation: this.state.designation,
      photoURL: this.state.photoURL,
      experience: this.state.experience,
    };

    this.setState({
      employeeList: [...this.state.employeeList, employee],
      id: this.state.id + 1,
      fname: "",
      lname: "",
      dob: "",
      designation: "",
      photoURL: "",
      experience: "",
    });
  };

  editEmployee = (e) => {
    console.log("edit employee called");

    let getEmp = this.state.employeeList.filter(
      (x) => x["id"] == e.target.value
    )[0];

    this.setState({
      fname: getEmp["fname"],
      lname: getEmp["lname"],
      dob: getEmp["dob"],
      designation: getEmp["designation"],
      photoURL: getEmp["photoURL"],
      experience: getEmp["experience"],
    });
  };

  deleteEmployee = (e) => {
    window.confirm("Please confirm to delete");

    this.setState({
      employeeList: this.state.employeeList.filter(
        (x) => x["id"] != e.target.value
      ),
    });
  };

  render() {
    return (
      <div>
        <h2>Employee Section</h2>
        <table className="table">
          <tr>
            <td>
              <label>Enter First Name</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.fname}
                onChange={(e) => this.setState({ fname: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Last Name</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.lname}
                onChange={(e) => this.setState({ lname: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter DOB</label>
            </td>
            <td>
              <input
                type="date"
                value={this.state.dob}
                onChange={(e) => this.setState({ dob: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Designation</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.designation}
                onChange={(e) => this.setState({ designation: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Profile Photo URL</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.photoURL}
                onChange={(e) => this.setState({ photoURL: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Experience</label>
            </td>
            <td>
              <input
                type="text"
                value={this.state.experience}
                onChange={(e) => this.setState({ experience: e.target.value })}
              />
            </td>
          </tr>
        </table>
        <button onClick={this.addEmployee}>Add Employee</button>
        <div>
          <h2>List of Employees</h2>
          <table className="table">
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Designation</th>
            <th>Photo</th>
            <th>Experience</th>
            <th>Edit</th>
            <th>Delete</th>
            {this.state.employeeList.map((x) => (
              <tr>
                <td>{x["fname"]}</td>
                <td>{x["lname"]}</td>
                <td>{x["dob"]}</td>
                <td>{x["designation"]}</td>
                <td>
                  <img src={x["photoURL"]} alt="URL not working"></img>
                </td>
                <td>{x["experience"]}</td>
                <td>
                  <button onClick={this.editEmployee} value={x["id"]}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={this.deleteEmployee} value={x["id"]}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Employee;

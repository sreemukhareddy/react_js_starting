import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "stephen", age: 25 },
      { name: "stepnie", age: 26 },
      { name: "mckay", age: 27 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hi...Im react app</h1>
        <p>qwertyt</p>
        <button>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobbies : Naaruto...
        </Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: App },
    //   React.createElement("h1", null, "im react too..!")
    // );
  }
}

export default App;

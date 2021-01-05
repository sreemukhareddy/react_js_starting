import React, { Component } from "react";

// const person = (props) => {
//   return (
//     <p>
//       I'm a {props.name} and {props.age} old.
//     </p>
//   );
// };

class person extends Component {
  render() {
    return (
      <div>
        <p>
          I'm a {this.props.name} and {this.props.age} old.
        </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default person;

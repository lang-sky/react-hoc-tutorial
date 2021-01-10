import React, { Component } from "react";

export const withFunctions = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: ""
      };
    }

    onEmailUpdate = (event) => {
      this.setState({ email: event.target.value });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          // email={this.state.email}
          onEmailUpdate={this.onEmailUpdate}
        />
      );
    }
  };
};

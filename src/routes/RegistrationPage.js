import React, { Component } from "react";
import { Section } from "../components/utils/utils";
// import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Register</h2>
        reg form here
        {/* <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        /> */}
      </Section>
    );
  }
}

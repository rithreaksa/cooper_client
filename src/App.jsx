/* eslint-disable no-undef */
import React, { Component } from "react";

import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: ""
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false })
    }
  }

  render() {
    const renderLogin = this.state.renderLoginForm ? (
      <LoginForm submitFormHandler={this.onLogin} />
    ) : (
      <button
        id="login"
        onClick={() => this.setState({ renderLoginForm: true })}
      >
        Login
      </button>
    );
    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />
        {renderLogin}
      </>
    );
  }
}

export default App;

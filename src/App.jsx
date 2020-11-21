/* eslint-disable default-case */
/* eslint-disable no-undef */
import React, { Component } from "react";

import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticateWithSignIn } from "./modules/auth";
import DisplayPerformanceData from "./components/DisplayPerformanceData";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
  };

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value, entrySaved: false });
  };

  onLogin = async (event) => {
    event.preventDefault();
    const response = await authenticateWithSignIn(
      event.target.email.value,
      event.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    let performanceDataIndex;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message">
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <button onClick={() => this.setState({ renderIndex: false })}>
                Hide past entries
              </button>
            </>
          );
        } else {
          performanceDataIndex = (
            <button
              id="show-index"
              onClick={() => this.setState({ renderIndex: true })}
            >
              Show past entries
            </button>
          );
          break;
        }
    }

    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() =>
            this.setState({ entrySaved: true, updateIndex: true })
          }
        />
        {renderLogin}
        {performanceDataIndex}
      </>
    );
  }
}

export default App;

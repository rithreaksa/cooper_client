/* eslint-disable default-case */
/* eslint-disable no-undef */
import React, { Component } from "react";

import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticateWithSignIn, authenticateWithSignUp } from "./modules/auth";
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import SignUpForm from "./components/SignUpForm";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    renderSignUpForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
  };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      entrySaved: false,
    });
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
      this.setState({
        message: response.message,
        renderLoginForm: false,
        renderSignUpForm: false,
      });
    }
  };

  onSignUp = async (event) => {
    event.preventDefault();
    const response = await authenticateWithSignUp(
      event.target.email.value,
      event.target.password.value,
      event.target.password_confirmation.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({
        message: response.message,
        renderLoginForm: false,
        renderSignUpForm: false,
      });
    }
  };

  signUpForm() {
    return <SignUpForm submitFormHandler={this.onSignUp} />;
  }

  signUpButton() {
    return (
      <button
        id="sign-up"
        onClick={() => this.setState({ renderSignUpForm: true })}
      >
        Sign Up
      </button>
    );
  }

  loginForm() {
    return <LoginForm submitFormHandler={this.onLogin} />;
  }

  loginButton() {
    return (
      <button
        id="login"
        onClick={() => this.setState({ renderLoginForm: true })}
      >
        Login
      </button>
    );
  }

  backButton() {
    return (
      <button
        id="back"
        onClick={() =>
          this.setState({ renderSignUpForm: false, renderLoginForm: false })
        }
      >
        Back
      </button>
    );
  }

  renderAuthenticatedPage() {
    let performanceDataIndex;
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
    }
    return (
      <>
        <p id="message">
          Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
        </p>
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
        <div>{performanceDataIndex}</div>
      </>
    );
  }

  renderLoginPage() {
    return (
      <>
        {this.loginForm()}
        {this.backButton()}
      </>
    );
  }

  renderSignUpPage() {
    return (
      <>
        {this.signUpForm()}
        {this.backButton()}
      </>
    );
  }

  renderDefaultPage() {
    return (
      <>
        {this.loginButton()}
        {this.signUpButton()}
        <p id="message">{this.state.message}</p>
      </>
    );
  }

  render() {
    const { renderSignUpForm, renderLoginForm, authenticated } = this.state;

    if (authenticated) {
      return this.renderAuthenticatedPage();
    }

    if (renderLoginForm) {
      return this.renderLoginPage();
    }

    if (renderSignUpForm) {
      return this.renderSignUpPage();
    }

    return this.renderDefaultPage();
  }
}

export default App;

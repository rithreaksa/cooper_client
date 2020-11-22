import React, { Component } from "react";
import { Container, Grid, Message, Button, Divider } from "semantic-ui-react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticateWithSignIn, authenticateWithSignUp } from "./modules/auth";
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import SignUpForm from "./components/SignUpForm";
import "./index.css"

class Home extends Component {
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

  onGenderChangeHandler = (event, data) => {
    this.setState({
      [data.name]: data.value,
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
      <Button
        basic
        id="back"
        onClick={() =>
          this.setState({ renderSignUpForm: false, renderLoginForm: false })
        }
      >
        Back
      </Button>
    );
  }

  renderPerformanceDataIndex() {
    if (this.state.renderIndex) {
      return (
        <>
          <DisplayPerformanceData
            updateIndex={this.state.updateIndex}
            indexUpdated={() => this.setState({ updateIndex: false })}
          />
          <Button
            color="grey"
            onClick={() => this.setState({ renderIndex: false })}
          >
            Hide past entries
          </Button>
        </>
      );
    }
    return (
      <Button
        color="grey"
        id="show-index"
        onClick={() => this.setState({ renderIndex: true })}
      >
        Show past entries
      </Button>
    );
  }

  renderAuthenticatedPage() {
    return (
      <Container>
        <Message positive>
          <p id="message">
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        </Message>

        <InputFields
          onChangeHandler={this.onChangeHandler}
          onGenderChangeHandler={this.onGenderChangeHandler}
        />

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

        <Divider />

        <div>{this.renderPerformanceDataIndex()}</div>
      </Container>
    );
  }

  renderLoginPage() {
    return (
      <Container>
        <Grid segment centered>
          <Grid.Row>{this.loginForm()}</Grid.Row>
          <Grid.Row>{this.backButton()}</Grid.Row>
        </Grid>
      </Container>
    );
  }

  renderSignUpPage() {
    return (
      <Container>
        <Grid segment centered>
          <Grid.Row>{this.signUpForm()}</Grid.Row>
          <Grid.Row>{this.backButton()}</Grid.Row>
        </Grid>
      </Container>
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
    if (this.state.authenticated) {
      return this.renderAuthenticatedPage();
    }

    if (this.state.renderLoginForm) {
      return this.renderLoginPage();
    }

    if (this.state.renderSignUpForm) {
      return this.renderSignUpPage();
    }

    return this.renderDefaultPage();
  }
}

export default Home;

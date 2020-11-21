import axios from "axios";

const authenticateWithSignUp = async (email, password, passwordConfirmation) => {
  try {
    const response = await axios.post("/auth", {
      email,
      password,
      password_confirmation: passwordConfirmation,
    })
    await storeAuthCredentials(response);
    return { authenticated: true };
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors[0] };
  }
}

const authenticateWithSignIn = async (email, password) => {
  try {
    const response = await axios.post("/auth/sign_in", {
      email: email,
      password: password,
    });
    await storeAuthCredentials(response);
    return { authenticated: true };
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors[0] };
  }
};

const storeAuthCredentials = ({ headers }) => {
  const credentials = {
    uid: headers["uid"],
    client: headers["client"],
    access_token: headers["access-token"],
    expiry: headers["expiry"],
    token_type: "Bearer",
  };
  sessionStorage.setItem("credentials", JSON.stringify(credentials));
};

export { authenticateWithSignUp, authenticateWithSignIn };

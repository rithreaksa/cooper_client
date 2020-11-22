import React from "react";
import { Card, Form, Button } from "semantic-ui-react";

// {
//   /* <Form>
// <Form.Field>
//   <label>First Name</label>
//   <input placeholder='First Name' />
// </Form.Field>
// <Form.Field>
//   <label>Last Name</label>
//   <input placeholder='Last Name' />
// </Form.Field>
// <Form.Field>
//   <Checkbox label='I agree to the Terms and Conditions' />
// </Form.Field>
// <Button type='submit'>Submit</Button>
// </Form> */
// }

const SignUpForm = ({ submitFormHandler }) => {
  return (
    <Card>
      <Card.Content extra>
        <Form onSubmit={submitFormHandler} id="sign-up-form">
          <Form.Field>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Email"
            ></input>
          </Form.Field>
          <Form.Field>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
            ></input>
          </Form.Field>
          <Form.Field>
            <input
              name="password_confirmation"
              type="password"
              id="password_confirmation"
              placeholder="Password Confirmation"
            ></input>
          </Form.Field>

          <Button id="submit">Submit</Button>
        </Form>
      </Card.Content>
    </Card>

    //   <label>Email</label>
    //   <input name="email" type="email" id="email"></input>
    //   <label>Password</label>
    //   <input name="password" type="password" id="password"></input>
    //   <label>Password Confirmation</label>
    //   <input
    //     name="password_confirmation"
    //     type="password"
    //     id="password_confirmation"
    //   ></input>
    //   <button id="submit">Submit</button>
    // </form>
  );
};

export default SignUpForm;

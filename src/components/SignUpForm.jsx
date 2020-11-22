import React from "react";
import { Card, Form, Button } from "semantic-ui-react";

const SignUpForm = ({ submitFormHandler }) => {
  return (
    <Card color="blue">
      <Card.Content extra>
        <Form onSubmit={submitFormHandler} id="sign-up-form">
          <Form.Input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
          />
          <Form.Input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
          />

          <Form.Input
            name="password_confirmation"
            type="password"
            id="password_confirmation"
            placeholder="Password Confirmation"
          />

          <Button id="submit">Submit</Button>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default SignUpForm;

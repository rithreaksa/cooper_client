import React from "react";
import { Card, Form, Button } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Card color="blue">
      <Card.Content extra>
        <Form onSubmit={submitFormHandler} id="login-form">
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
          <Button id="submit">Submit</Button>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default LoginForm;

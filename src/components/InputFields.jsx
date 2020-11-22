import React from "react";
import { Form } from "semantic-ui-react";

const InputFields = ({ onChangeHandler, onGenderChangeHandler }) => {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          type="text"
          placeholder="Distance"
          onChange={onChangeHandler}
          name="distance"
          id="distance"
        />
        <Form.Select
          fluid
          options={[
            { key: "f", text: "Female", value: "female" },
            { key: "m", text: "Male", value: "male" },
            { key: "o", text: "Other", value: "other" },
          ]}
          placeholder="Gender"
          onChange={onGenderChangeHandler}
          name="gender"
          id="gender"
        />

        <Form.Input
          fluid
          type="text"
          placeholder="Age"
          onChange={onChangeHandler}
          name="age"
          id="age"
        />
      </Form.Group>
    </Form>
  );
};

export default InputFields;

// {/* <Form.Select
// fluid
// options={[
//   { key: "f", text: "Female", value: "female" },
//   { key: "m", text: "Male", value: "male" },
//   { key: "o", text: "Other", value: "other" },
// ]}
// placeholder="Gender"
// onChange={onGenderChangeHandler}
// name="gender"
// id="gender"
// /> */}
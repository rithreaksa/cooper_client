import React from "react";
import { Message, Button } from "semantic-ui-react";
import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";

const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler,
}) => {
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <>
          <Message info>
            <p id="cooper-message">
              {age} y/o {gender} running {distance} meters.
            </p>
            <Message.Header>
              <p id="cooper-result">Result: {result}</p>
            </Message.Header>
          </Message>
          {authenticated && !entrySaved ? (
            <Button
              positive
              id="save-result"
              onClick={() => saveData(result, age, distance, entryHandler)}
            >
              Save entry
            </Button>
          ) : (
            <Message info>
              <p id="response-message">Your entry was saved</p>
            </Message>
          )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;

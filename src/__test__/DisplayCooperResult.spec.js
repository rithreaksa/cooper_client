import React from "react";
import { shallow } from "enzyme";

import DisplayCooperResult from "../components/DisplayCooperResult";

describe("<DisplayCooperResult />", () => {
  let describedComponent;
  describe("evaluates the correct result for female/poor", () => {
    beforeAll(() => {
      describedComponent = shallow(
        <DisplayCooperResult distance="1000" gender="female" age="23" />
      );
    });

    it("and returns the assessment", () => {
      expect(describedComponent.find("p#cooper-result").text()).toEqual(
        "Result: Poor"
      );
    });

    it("and returns the data user put in", () => {
      expect(describedComponent.find("p#cooper-message").text()).toEqual(
        "23 y/o female running 1000 meters."
      );
    });
  });

  describe("evaluates the correct result for female/average", () => {
    beforeAll(() => {
      describedComponent = shallow(
        <DisplayCooperResult distance="2000" gender="female" age="23" />
      );
    });

    it("and returns the assessment", () => {
      expect(describedComponent.find("p#cooper-result").text()).toEqual(
        "Result: Average"
      );
    });

    it("and returns the data user put in", () => {
      expect(describedComponent.find("p#cooper-message").text()).toEqual(
        "23 y/o female running 2000 meters."
      );
    });
  });
});

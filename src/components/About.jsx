import React from "react";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <h1>About this web page</h1>
      <h2>
        We design this app for users to calculate their cooper result for the fitness purpose. We are a group of three students from 
        Craft Academy studying the art of code. We love code and our coaches very much. 
        When you first visit, as you know, you have to create an account and later you can log in with it to store your data.
        There are five colors on the doughnut chart that display your progress. The first color in red and the last one is green.
        That because we assume you will improve through out the time that you will be using our webpage.
        <br/>
        <br/>
        We really hope you will enjoy using our app and the the fine feeling of working out!
      </h2>
    </Container>
  );
};

export default About;

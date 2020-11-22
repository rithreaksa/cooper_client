import React from "react";

import Home from "./Home";
import Header from "./components/Header";
import About from "./components/About";
import CooperTest from "./components/cooperTest";
import { Switch, Route } from "react-router-dom";
//import Footer from "./Footer"

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/cooperTest" component={CooperTest}></Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default App;

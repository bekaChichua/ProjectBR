import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import SmallNavbar from "./components/SmallNavbar";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboveNavbar from "./components/AboveNavbar";
const LinksPage = () => {
  return (
    <div className="LinkPage">
      <AboveNavbar />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <SmallNavbar />
    </div>
  );
};

export default LinksPage;

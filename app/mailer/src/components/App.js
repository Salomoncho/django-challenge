import React, { Component } from "react";
import { render } from "react-dom";
import CompaniesList from "./CompaniesList";

const App = (props) => {
  return (
    <div className="center">
      <CompaniesList />
    </div>
  );
};

const appDiv = document.getElementById("app");

render(<App />, appDiv);

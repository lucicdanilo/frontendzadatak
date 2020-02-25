import React, { PureComponent } from "react";
import Main from "./Main";
import "./App.css";
import folderStructure from "./json/folderStructure";
import MetisMenu from "react-metismenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouterLink from "react-metismenu-router-link";

class Navigation extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col navigationBar">
          <MetisMenu content={folderStructure} classNameIcon="fas fa-folder" />
        </div>
        <div className="col-10 centralBar">
          <Router>
            <Route exact path="/:id(\d+)" component={Main} />
          </Router>
        </div>
      </div>
    );
  }
}

export default Navigation;

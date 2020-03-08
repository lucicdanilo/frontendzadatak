import React from "react";
import Main from "../components/Main";
import "../App.css";
import folderStructure from "../json/folderStructure";
import MetisMenu from "react-metismenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle id="navbarToggle" aria-controls="basic-navbar-nav" />

        <div className="row">
          <div className="col navigationBar">
            <Navbar.Collapse>
              <MetisMenu
                content={folderStructure}
                classNameIcon="fas fa-folder"
              />
            </Navbar.Collapse>
          </div>

          <div className="col-10 centralBar">
            <Router>
              <Route exact path="/:id(\d+)" component={Main} />
            </Router>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;

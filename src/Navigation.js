import React, { PureComponent } from "react";
import ReactDOM from "react";
import Main from "./Main";
import "./App.css";
import folderStructure from "./json/folderStructure";
import MetisMenu from "react-metismenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouterLink from "react-metismenu-router-link";

const content = [
  {
    label: "Folder 1"
  },
  {
    label: "Folder 2",
    content: [
      {
        label: "Subfolder 1",
        content: [
          {
            label: "Novi folder 1",
            to: "0"
          },
          {
            label: "2",
            to: "1"
          },
          {
            label: "3",
            to: "2"
          }
        ]
      },
      {
        label: "Subfolder 2"
      },
      {
        label: "Subfolder 3"
      },
      {
        label: "Subfolder 4"
      }
    ]
  }
];

class Navigation extends React.Component {
  render() {
    console.log(folderStructure);
    return (
      <div className="row">
        <div className="col navigationBar">
          <MetisMenu content={content} classNameIcon="fas fa-folder" />
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

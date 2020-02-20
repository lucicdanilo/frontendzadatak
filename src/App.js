import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Search from "./Search";
import avatar from "./avatar.jpg";

function App() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-end titleBar">
        <div className="col"></div>
        <div className="col-8 searchBar">
          <Search />
        </div>
        <div className="col accountBar">
          <img src={avatar} alt={"Avatar"} className="avatar" />
        </div>
      </div>
      <div className="navigationComponent">
        <Navigation />
      </div>
    </div>
  );
}

export default App;

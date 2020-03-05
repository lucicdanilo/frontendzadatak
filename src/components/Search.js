import React from "react";
import "../App.css";
import { Form } from "react-bootstrap";

class Search extends React.Component {
  render() {
    return <Form.Control type="text" placeholder="Pretraga" />;
  }
}

export default Search;

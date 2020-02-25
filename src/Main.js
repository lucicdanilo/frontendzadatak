import React from "react";
import Preview from "./Preview";
import "./App.css";
import documentStructure from "./json/documentStructure";
import folderInfo from "./json/folderInfo";
import Table from "react-bootstrap/Table";
import { ThreeDots } from "react-bootstrap-icons";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.match.params.id, idPreview: "" };
    this.callPreview = this.callPreview.bind(this);
  }

  callPreview = ({ currentTarget }) => {
    this.setState({ idPreview: currentTarget.id });
  };

  render() {
    const rowsOfTable = [];
    documentStructure.map(document => {
      if (document["id foldera"] === this.state.id) {
        rowsOfTable.push(
          <tr>
            <td>{document["Naziv dokumenta"]}</td>
            <td>{document["Broj"]}</td>
            <td>{document["Status"]}</td>
            <td>{document["Autor"]}</td>
            <td>{document["Tip"]}</td>
            <td>{document["Datum"]}</td>
            <td>
              <div id={document["id dokumenta"]} onClick={this.callPreview}>
                <ThreeDots className="iconInRow" size={23} color={"#98c6d7"} />
              </div>
            </td>
          </tr>
        );
      }
    });

    return (
      <div className="row">
        <div className="col-7">
          <h6 className="dokumentiNaslov">DOKUMENTI</h6>
          <div className="opisFoldera">
            <div className="row">
              <p className="naslovinformacijeoFolder">
                <div className="column">
                  <p
                    style={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      marginLeft: "8%"
                    }}
                  >
                    Naziv foldera:
                    <span className="informacijeoFolder">
                      {folderInfo[this.state.id]["Naziv"]}
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      marginLeft: "8%"
                    }}
                  >
                    Sektor:
                    <span className="informacijeoFolder">
                      {folderInfo[this.state.id]["Sektor"]}
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      marginLeft: "8%"
                    }}
                  >
                    Datum kreiranja:
                    <span className="informacijeoFolder">
                      {folderInfo[this.state.id]["Datum"]}
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      marginLeft: "8%"
                    }}
                  >
                    Kreator:
                    <span className="informacijeoFolder">
                      {folderInfo[this.state.id]["Kreator"]}
                    </span>
                  </p>
                </div>
                <div className="column">
                  Opis:{" "}
                  <p className="opis">{folderInfo[this.state.id]["Opis"]}</p>
                </div>
              </p>
            </div>
          </div>
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <Table className="table table-borderless table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">Naziv dokumenta</th>
                  <th scope="col">Broj</th>
                  <th scope="col">Status</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Tip</th>
                  <th scope="col">Datum</th>
                </tr>
              </thead>
              <tbody>{rowsOfTable}</tbody>
            </Table>
          </div>
        </div>

        {this.state.idPreview === "" ? (
          <div></div>
        ) : (
          <div className="col previewBar">
            <div id="previewComponent">
              <Preview idDokumenta={this.state.idPreview} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Main;

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
    var idDokumenta = [];
    var nazivDokumenta = [];
    var broj = [];
    var status = [];
    var autor = [];
    var tip = [];
    var datum = [];

    var nazivFoldera = folderInfo[this.state.id]["Naziv"];
    var sektorFoldera = folderInfo[this.state.id]["Sektor"];
    var datumKreiranjaFoldera = folderInfo[this.state.id]["Datum"];
    var kreatorFoldera = folderInfo[this.state.id]["Kreator"];
    var opisFoldera = folderInfo[this.state.id]["Opis"];

    if (documentStructure[this.state.id].length) {
      for (var i = 0; i <= documentStructure[this.state.id].length - 1; i++) {
        idDokumenta.push(documentStructure[this.state.id][i]["id dokumenta"]);
        nazivDokumenta.push(
          documentStructure[this.state.id][i]["Naziv dokumenta"]
        );
        broj.push(documentStructure[this.state.id][i]["Broj"]);
        status.push(documentStructure[this.state.id][i]["Status"]);
        autor.push(documentStructure[this.state.id][i]["Autor"]);
        tip.push(documentStructure[this.state.id][i]["Tip"]);
        datum.push(documentStructure[this.state.id][i]["Datum"]);
      }
    } else {
      idDokumenta.push(documentStructure[this.state.id]["id dokumenta"]);
      nazivDokumenta.push(documentStructure[this.state.id]["Naziv dokumenta"]);
      broj.push(documentStructure[this.state.id]["Broj"]);
      status.push(documentStructure[this.state.id]["Status"]);
      autor.push(documentStructure[this.state.id]["Autor"]);
      tip.push(documentStructure[this.state.id]["Tip"]);
      datum.push(documentStructure[this.state.id]["Datum"]);
    }

    const rowsOfTable = [];
    for (var i = 0; i <= idDokumenta.length - 1; i++) {
      rowsOfTable.push(
        <tr>
          <td>{nazivDokumenta[i]}</td>
          <td>{broj[i]}</td>
          <td>{status[i]}</td>
          <td>{autor[i]}</td>
          <td>{tip[i]}</td>
          <td>{datum[i]}</td>
          <td>
            <div id={idDokumenta[i]} onClick={this.callPreview}>
              <ThreeDots className="iconInRow" size={23} color={"#98c6d7"} />
            </div>
          </td>
        </tr>
      );
    }

    return (
      <div className="row">
        <div className="col-7">
          <h6 className="dokumentiNaslov">DOKUMENTI{this.state.idPreview}</h6>
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
                    <span className="informacijeoFolder">{nazivFoldera}</span>
                  </p>
                  <p
                    style={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      marginLeft: "8%"
                    }}
                  >
                    Sektor:
                    <span className="informacijeoFolder">{sektorFoldera}</span>
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
                      {datumKreiranjaFoldera}
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
                    <span className="informacijeoFolder">{kreatorFoldera}</span>
                  </p>
                </div>
                <div className="column">
                  Opis: <p className="opis">{opisFoldera}</p>
                </div>
              </p>
            </div>
          </div>
          <div>
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

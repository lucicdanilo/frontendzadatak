import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Envelope, Download, Upload, Plus, X } from "react-bootstrap-icons";
import documentStructure from "./json/documentStructure";

class Preview extends React.Component {
  showPopUp = () => {
    document.getElementById("dimScreen").style.visibility = "visible";
  };

  hidePopUp = () => {
    document.getElementById("dimScreen").style.visibility = "hidden";
  };
  render() {
    var idDokumenta = this.props.idDokumenta;

    var naziv;
    var status;
    var verzija;
    var autor;
    var broj;
    var tip;
    var datum;
    var djelotvorniBroj;
    var opisDokumenta;
    var subjekt;
    var oznakaDokumenta;
    var nacinPrijema;
    var ekstenzija;

    console.log(this.props.idDokumenta);

    console.log(documentStructure[this.props.idDokumenta].length);
    if (documentStructure[this.props.idDokumenta].length) {
      for (
        var i = 0;
        i <= documentStructure[this.props.idDokumenta].length - 1;
        i++
      ) {
        console.log(
          documentStructure[this.props.idDokumenta][i]["id dokumenta"]
        );
        if (
          documentStructure[this.props.idDokumenta][i]["id dokumenta"] ==
          idDokumenta
        ) {
          naziv =
            documentStructure[this.props.idDokumenta][i]["Naziv dokumenta"];
          status = documentStructure[this.props.idDokumenta][i]["Status"];
          verzija = documentStructure[this.props.idDokumenta][i]["Verzija"];
          autor = documentStructure[this.props.idDokumenta][i]["Autor"];
          broj = documentStructure[this.props.idDokumenta][i]["Broj"];
          tip = documentStructure[this.props.idDokumenta][i]["Tip"];
          datum = documentStructure[this.props.idDokumenta][i]["Datum"];
          djelotvorniBroj =
            documentStructure[this.props.idDokumenta][i]["Djelotvorni broj"];
          opisDokumenta =
            documentStructure[this.props.idDokumenta][i]["Opis dokumenta"];
          subjekt = documentStructure[this.props.idDokumenta][i]["Subjekt"];
          oznakaDokumenta =
            documentStructure[this.props.idDokumenta][i]["Oznaka dokumenta"];
          nacinPrijema =
            documentStructure[this.props.idDokumenta][i]["Način prijema"];
          ekstenzija =
            documentStructure[this.props.idDokumenta][i]["Ekstenzija"];
        }
      }
    } else {
      naziv = documentStructure[this.props.idDokumenta]["Naziv dokumenta"];
      status = documentStructure[this.props.idDokumenta]["Status"];
      verzija = documentStructure[this.props.idDokumenta]["Verzija"];
      autor = documentStructure[this.props.idDokumenta]["Autor"];
      broj = documentStructure[this.props.idDokumenta]["Broj"];
      tip = documentStructure[this.props.idDokumenta]["Tip"];
      datum = documentStructure[this.props.idDokumenta]["Datum"];
      djelotvorniBroj =
        documentStructure[this.props.idDokumenta]["Djelotvorni broj"];
      opisDokumenta =
        documentStructure[this.props.idDokumenta]["Opis dokumenta"];
      subjekt = documentStructure[this.props.idDokumenta]["Subjekt"];
      oznakaDokumenta =
        documentStructure[this.props.idDokumenta]["Oznaka dokumenta"];
      nacinPrijema = documentStructure[this.props.idDokumenta]["Način prijema"];
      ekstenzija = documentStructure[this.props.idDokumenta]["Ekstenzija"];
    }

    const extension = () => {
      switch (ekstenzija) {
        case "pdf":
          return (
            <img src={require("./icons/pdf.png")} height="35" width="30" />
          );
        case "doc":
          return (
            <img src={require("./icons/doc.png")} height="35" width="35" />
          );
        default:
          return <div></div>;
      }
    };

    return (
      <div>
        <div id="previewComponent"></div>
        <div className="ekstenzijaDokumenta">{extension()}</div>
        <h5 className="nazivDokumenta">{naziv}</h5>
        <div className="previewData">
          <p
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "2%"
            }}
          >
            Verzija: {verzija}
          </p>
          <p
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "2%"
            }}
          >
            Autor: {autor}
          </p>
          <p
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "2%"
            }}
          >
            Broj: {broj}
          </p>
          <p
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "2%"
            }}
          >
            Tip: {tip}
          </p>
          <p
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "2%"
            }}
          >
            Datum: {datum}
          </p>
        </div>
        <div className="previewButtons">
          <ButtonToolbar>
            <Button className="primary">POGLEDAJ DOKUMENT</Button>
            <Button className="btn btn-light">
              <Envelope size={23} />
            </Button>
            <Button className="btn btn-light">
              <Download size={23} />
            </Button>
            <Button className="btn btn-light">
              <Upload size={23} />
            </Button>
          </ButtonToolbar>
          <div className="izmjeniDocument">
            Informacije o dokumentu
            <div className="btn btn-link" onClick={this.showPopUp}>
              IZMIJENI
            </div>
          </div>
          <div className="infoAboutDocument">
            <p className="naslov">Naziv </p>
            <p className="vrijednost">{naziv}</p>
            <p className="naslov">Djelovodni broj</p>
            <p className="vrijednost">{djelotvorniBroj}</p>
            <p className="naslov">Opis dokumenta</p>
            <p className="vrijednost">{opisDokumenta}</p>
            <p className="naslov">Subjekt</p>
            <p className="vrijednost">{subjekt}</p>
            <p className="naslov">Oznaka dokumenta</p>
            <p className="vrijednost">{oznakaDokumenta}</p>
            <p className="naslov">Način prijema</p>
            <p className="vrijednost">{nacinPrijema}</p>
          </div>
        </div>
        <div id="dimScreen">
          <div className="closePopUp" onClick={this.hidePopUp}>
            <X size={40} />
          </div>
          <div id="popUp">
            <div className="ekstenzijaDokumenta">{extension()}</div>
            <h5 className="nazivDokumenta">{naziv}</h5>
            <div className="verIautor">
              <p className="verzija">Verzija: {verzija}</p>
              <p className="autor">Autor: {autor}</p>
            </div>
            <div className="dodajNovoPoljeButton">
              <Button variant="outline-secondary">
                <Plus size={25} />
                DODAJ NOVO POLJE
              </Button>
            </div>
            <div className="popUpPolja">
              <Form>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <Form.Group>
                        <Form.Label>Naziv dokumenta</Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          value={naziv}
                        />
                      </Form.Group>
                    </div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label>Djelotvorni broj</Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          value={djelotvorniBroj}
                        />
                      </Form.Group>
                    </div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label>Opis dokumenta</Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          value={opisDokumenta}
                        />
                      </Form.Group>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label>Subjekt</Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          value={subjekt}
                        />
                      </Form.Group>
                    </div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label>Oznaka dokumenta</Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          value={oznakaDokumenta}
                        />
                      </Form.Group>
                    </div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label>Način prijema</Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          value={nacinPrijema}
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <Button className="popUpSacuvajIzmjene" variant="primary">
              SAČUVAJ IZMJENE
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;

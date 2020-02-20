import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Envelope, Download, Upload } from "react-bootstrap-icons";
import documentStructure from "./json/documentStructure";

class Preview extends React.Component {
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
      console.log(documentStructure[this.props.idDokumenta]);
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

    console.log(verzija);
    console.log(opisDokumenta);

    return (
      <div>
        <div className="ekstenzijaDokumenta">{ekstenzija}</div>
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
            <div className="btn btn-link">IZMIJENI</div>
          </div>
          <div className="infoAboutDocument">
            <p className="naslov">Naziv </p>
            <p className="vrijednost">{naziv}</p>
            <p className="naslov">Djelovodni broj</p>
            <p className="vrijednost">{djelotvorniBroj}}</p>
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
      </div>
    );
  }
}

export default Preview;

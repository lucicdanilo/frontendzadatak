import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Envelope, Download, Upload, Plus, X } from "react-bootstrap-icons";
import documentStructure from "../json/documentStructure";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp2text: "",
      popUp2type: "",
      isPopUp2Clicked: 0,
      fieldsFromPopUp: ""
    };

    this.fieldsFromPopUp = [];
    this.handleSubmitPopUp2 = this.handleSubmitPopUp2.bind(this);
    this.handleChange2PopUpText = this.handleChange2PopUpText.bind(this);
    this.handleChange2PopUpType = this.handleChange2PopUpType.bind(this);
  }

  handleSubmitPopUp2(event) {
    event.preventDefault();
    if (this.state.popUp2type === "Izaberite" || this.state.popUp2type === "") {
      alert("Izaberite tip polja");
    } else if (this.state.popUp2text === "") {
      alert("Unesite naziv polja");
    } else {
      document.getElementById("dodajPoljePopUp").style.visibility = "hidden";
      this.setState({ isPopUp2Clicked: 1 });
    }
  }

  showPopUp = () => {
    document.getElementById("dimScreen").style.visibility = "visible";
  };

  hidePopUp = () => {
    this.setState({ popUp2text: "", popUp2type: "" });
    this.fieldsFromPopUp = [];
    this.forceUpdate();
    document.getElementById("dimScreen").style.visibility = "hidden";
    document.getElementById("dodajPoljePopUp").style.visibility = "hidden";
  };

  showPopUpDodajPolje = () => {
    document.getElementById("dodajPoljePopUp").style.visibility = "visible";
  };

  closePopUp2 = () => {
    document.getElementById("dodajPoljePopUp").style.visibility = "hidden";
  };

  handleChange2PopUpText(event) {
    this.setState({ popUp2text: event.target.value });
  }

  handleChange2PopUpType(event) {
    this.setState({ popUp2type: event.target.value });
  }

  handleSubmitPopUp = event => {
    event.preventDefault();
    documentStructure.map(item => {
      if (item["id dokumenta"] === this.props.idDokumenta) {
        item["Naziv dokumenta"] = document.getElementsByClassName(
          "popUpTextInput"
        )[0].value;
        item["Djelotvorni broj"] = document.getElementsByClassName(
          "popUpTextInput"
        )[1].value;
        item["Opis dokumenta"] = document.getElementsByClassName(
          "popUpTextInput"
        )[2].value;
        item["Subjekt"] = document.getElementsByClassName(
          "popUpTextInput"
        )[3].value;
        item["Oznaka dokumenta"] = document.getElementsByClassName(
          "popUpTextInput"
        )[4].value;
        item["Način prijema"] = document.getElementsByClassName(
          "popUpTextInput"
        )[5].value;
        for (
          var i = 0;
          i <= document.getElementsByClassName("nameOfAddedFields").length - 1;
          i++
        ) {
          if (
            document.getElementsByClassName("valueOfAddedFields")[i].type ===
            "checkbox"
          ) {
            if (
              document.getElementsByClassName("valueOfAddedFields")[i].checked
            ) {
              item[
                document.getElementsByClassName("nameOfAddedFields")[
                  i
                ].innerHTML
              ] = "jeste";
            } else {
              item[
                document.getElementsByClassName("nameOfAddedFields")[
                  i
                ].innerHTML
              ] = "nije";
            }
          } else {
            item[
              document.getElementsByClassName("nameOfAddedFields")[i].innerHTML
            ] = document.getElementsByClassName("valueOfAddedFields")[i].value;
          }
        }
      }
    });
    document.getElementById("dimScreen").style.visibility = "hidden";
    console.log(documentStructure);
    var documentStructureJSON = JSON.stringify(documentStructure);
    console.log(documentStructureJSON);
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

    documentStructure.map(document => {
      if (document["id dokumenta"] === this.props.idDokumenta) {
        naziv = document["Naziv dokumenta"];
        status = document["Status"];
        verzija = document["Verzija"];
        autor = document["Autor"];
        broj = document["Broj"];
        tip = document["Tip"];
        datum = document["Datum"];
        djelotvorniBroj = document["Djelotvorni broj"];
        opisDokumenta = document["Opis dokumenta"];
        subjekt = document["Subjekt"];
        oznakaDokumenta = document["Oznaka dokumenta"];
        nacinPrijema = document["Način prijema"];
        ekstenzija = document["Ekstenzija"];
      }
    });

    var valueees = [];
    for (
      var i = 9;
      i <= Object.keys(documentStructure[idDokumenta]).length - 1;
      i++
    ) {
      valueees.push(
        <div>
          <p className="naslov">
            {Object.keys(documentStructure[idDokumenta])[i]}
          </p>
          <p className="vrijednost">
            {Object.values(documentStructure[idDokumenta])[i]}
          </p>
        </div>
      );
    }

    if (this.state.isPopUp2Clicked) {
      if (this.state.popUp2type === "Text") {
        this.fieldsFromPopUp.push(
          <div class="col">
            <Form.Group>
              <Form.Label className="popUpLabel nameOfAddedFields">
                {this.state.popUp2text}
              </Form.Label>
              <Form.Control
                type="text"
                className="popUpTextInput valueOfAddedFields"
              />
            </Form.Group>
          </div>
        );
      }
      if (this.state.popUp2type === "Checkbox") {
        this.fieldsFromPopUp.push(
          <div class="col">
            <Form.Group>
              <Form.Label className="popUpLabel nameOfAddedFields">
                {this.state.popUp2text}
              </Form.Label>
              <Form.Control
                type="checkbox"
                className="popUpCheckBox valueOfAddedFields"
              />
            </Form.Group>
          </div>
        );
      }
      if (this.state.popUp2type === "Textarea") {
        this.fieldsFromPopUp.push(
          <div class="col">
            <Form.Group>
              <Form.Label className="popUpLabel nameOfAddedFields">
                {this.state.popUp2text}
              </Form.Label>
              <Form.Control
                type="textarea"
                className="popUpTextArea valueOfAddedFields"
              />
            </Form.Group>
          </div>
        );
      }

      this.setState({ isPopUp2Clicked: 0 });
    }

    const extension = () => {
      switch (ekstenzija) {
        case "pdf":
          return (
            <img
              src={require("../icons/pdf.png")}
              height="35"
              width="30"
              alt=""
            />
          );
        case "doc":
          return (
            <img
              src={require("../icons/doc.png")}
              height="35"
              width="35"
              alt=""
            />
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

            {valueees}
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
              <Button
                variant="outline-secondary"
                onClick={this.showPopUpDodajPolje}
              >
                <Plus size={25} />
                DODAJ NOVO POLJE
              </Button>
            </div>
            <div className="popUpPolja">
              <Form onSubmit={this.handleSubmitPopUp}>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <Form.Group>
                        <Form.Label className="popUpLabel">
                          Naziv dokumenta
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          defaultValue={naziv}
                        />
                      </Form.Group>
                    </div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label className="popUpLabel">
                          Djelotvorni broj
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          defaultValue={djelotvorniBroj}
                        />
                      </Form.Group>
                    </div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label className="popUpLabel">
                          Opis dokumenta
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          defaultValue={opisDokumenta}
                        />
                      </Form.Group>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label className="popUpLabel">Subjekt</Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          defaultValue={subjekt}
                        />
                      </Form.Group>
                    </div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label className="popUpLabel">
                          Oznaka dokumenta
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          defaultValue={oznakaDokumenta}
                        />
                      </Form.Group>
                    </div>
                    <div class="col">
                      <Form.Group>
                        <Form.Label className="popUpLabel">
                          Način prijema
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="popUpTextInput"
                          defaultValue={nacinPrijema}
                        />
                      </Form.Group>
                    </div>
                    <div class="w-100"></div>
                    <div className="addedNewFields">{this.fieldsFromPopUp}</div>
                  </div>
                </div>
                <Button
                  className="popUpSacuvajIzmjene"
                  variant="primary"
                  type="submit"
                >
                  SAČUVAJ IZMJENE
                </Button>
              </Form>
            </div>
          </div>
          <div id="dodajPoljePopUp">
            <div className="titleDodajPoljePopUp">Dodaj polje</div>
            <div className="closePopUp2" onClick={this.closePopUp2}>
              <X size={35} />
            </div>
            <Form onSubmit={this.handleSubmitPopUp2}>
              <Button className="dodajPopUp2" variant="primary" type="submit">
                DODAJ
              </Button>
              <div className="formPopUp2">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="popUp2TextInput"
                    placeholder="Naziv polja"
                    value={this.state.popUp2text}
                    onChange={this.handleChange2PopUpText}
                  />
                  <Form.Control
                    as="select"
                    className="popUp2checkbox"
                    value={this.state.popUp2type}
                    onChange={this.handleChange2PopUpType}
                  >
                    <option>Izaberite</option>
                    <option>Text</option>
                    <option>Checkbox</option>
                    <option>Textarea</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;

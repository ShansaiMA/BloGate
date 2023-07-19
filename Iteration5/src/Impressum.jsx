import React from "react";
import { Card } from "react-bootstrap";
import "./App.css";

function Impressum() {
  return (
    <div className="container">
      <div className="content-impressum">
        <h2 className="überschrift-h2">Impressum</h2>

        <div className="row">
          <div className="col">
            <Card className="impressum-card">
              <Card.Body>
                <Card.Title>
                  <a href="mailto:shansai@stud.hs-ruhrwest.de">
                    Shansai Mahendran
                  </a>
                </Card.Title>
                <Card.Text>
                  Studiengang: E-Commerce
                  <br />
                  Hochschule: HRW
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card className="impressum-card">
              <Card.Body>
                <Card.Title>
                  <a href="mailto:armend@stud.hs-ruhrwest.de">
                    Armend Ukzmaili
                  </a>
                </Card.Title>
                <Card.Text>
                  Studiengang: E-Commerce
                  <br />
                  Hochschule: HRW
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import LogoBild from "/img/Transparentes Logo.png";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} md={6}>
            <div className="logo">
              <a href="/">
                <img src={LogoBild} alt="Logo der Webseite" width="300" />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} className="d-sm-flex align-items-center justify-content-end">
            <nav className="navigation">
              <ul className="nav_links">
                <li>
                  <a href="/">Startseite</a>
                </li>
                <li>
                  <a href="/favoriten">Favoriten</a>
                </li>
                <li>
                  <a href="/impressum">Impressum</a>
                </li>
              </ul>
              <div className="NavAll">
                <ul className="nav_links2">
                  <li>
                    <a className="csa" href="/Kontakt">
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

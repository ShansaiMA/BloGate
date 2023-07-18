import React from 'react';
import './App.css';

function Impressum() {
  return (
    <div className="container">
      <div className="content-impressum">
        <h2 className="überschrift-h2">Impressum</h2>

        <div className="row">
          <div className="col">
            <div className="autorenbox">
              <ul>
                <li>Name: Shansai Mahendran</li>
                <li>Studiengang: E-Commerce</li>
                <li>Hochschule: HRW </li>
              </ul>
            </div>
          </div>

          <div className="col">
            <div className="autorenbox">
              <ul>
                <li>Armend Ukzmaili</li>
                <li>Studiengang: E-Commerce</li>
                <li>Hochschule: HRW</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;

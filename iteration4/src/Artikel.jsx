
import './App.css';
import React from "react";
import { useParams } from "react-router-dom";
import Artikel1Daten from "../src/properties/Artikel1Daten";
import Artikel2Daten from "../src/properties/Artikel2Daten";

const Artikel = () => {
  const { id } = useParams();

  let articleData;
  if (id === "1") {
    articleData = Artikel1Daten;
  } else if (id === "2") {
    articleData = Artikel2Daten;
  }

  return (
    <div>
      <p>{articleData.content}</p>
    </div>
  );
};

export default Artikel;








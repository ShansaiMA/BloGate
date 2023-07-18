import React, { useState } from "react";

const Zeichenzähler = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
    setCount(event.target.value.length);
  };

  return (
    <div>
      <textarea
        id="kommentar"
        name="kommentar"
        rows="20"
        cols="80"
        maxLength="300"
        placeholder="Schreibe einen Kommentar"
        onChange={handleChange}
        value={text}
      ></textarea>
      <p>Anzahl Zeichen: {count}/300</p>
    </div>
  );
};

export default Zeichenzähler;

import React, { useState } from "react";

const Zeichenzaehler = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
    setCount(event.target.value.length);
  };

  return (
    <div>
      <textarea onChange={handleChange} value={text}></textarea>
      <p>Anzahl Zeichen: {count}</p>
    </div>
  );
};

export default Zeichenzaehler;

/*Athena*/ 
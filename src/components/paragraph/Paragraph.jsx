import React, { createElement, useState } from "react";
import "./Paragraph.css";

const Paragraph = (props) => {
  const [val, setVal] = useState("");

  const handleInput = (e) => {
    setVal(e.target.value);
  };

  function btn_Add() {
    if (!val) {
      alert("Поле пуста");
      return;
    }

    const newVal = {
      val: val,
      id: Date.now(),
    };

    props.handle(newVal);
    setVal("");
  }

  return (
    <div>
      <input
        onChange={handleInput}
        id="inp_task2"
        value={val}
        type="text"
        placeholder="text"
      />
      <button onClick={btn_Add} id="btn_task2">
        Click
      </button>
    </div>
  );
};

export default Paragraph;

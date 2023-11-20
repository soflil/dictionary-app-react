import React from "react";
import "./Results.css";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>
        <h3>/{props.result.phonetic}/</h3>
        <Meanings meanings={props.result.meanings} />
      </div>
    );
  } else {
    return null;
  }
}

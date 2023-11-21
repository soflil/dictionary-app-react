import React from "react";
import "./Results.css";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <section>
          <h2 className="word">{props.result.word}</h2>
          <h3 className="phonetic">/{props.result.phonetic}/</h3>
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

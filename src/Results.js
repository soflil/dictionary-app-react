import React from "react";
import "./Results.css";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>
        <h3>/{props.result.phonetic}/</h3>
        {props.result.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <h3>{props.result.meanings.partOfSpeech}</h3>
              <p>
                <strong>Definition: </strong>
                {meanings.definition}
                <br />
                <strong>Example: </strong>
                <em>{meanings.example}</em>
              </p>
              <Synonyms synonyms={meanings.synonyms} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

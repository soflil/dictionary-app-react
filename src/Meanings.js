import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (meanings, index) {
        return (
          <section key={index}>
            <h3>{meanings.partOfSpeech}</h3>
            <p>
              <strong>Definition: </strong>
              {meanings.definition}
              <br />
              <strong>Example: </strong>
              <em>{meanings.example}</em>
            </p>
            <Synonyms synonyms={meanings.synonyms} />{" "}
          </section>
        );
      })}
    </div>
  );
}

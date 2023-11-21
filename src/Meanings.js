import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h3 className="partOfSpeech">{props.meanings.partOfSpeech}</h3>
        <p className="definition">{props.meanings.definition}</p>
        <p className="example">
          <em>{props.meanings.example}</em>
        </p>
        <Synonyms synonyms={props.meanings.synonyms} />{" "}
      </section>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=t3221ffbd05c05a8aa7da54904b6044o`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="header-question">
            What word would you like to search for?
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search a word..."
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              onChange={handleKeywordChange}
            ></input>
          </form>
          <div className="hint">
            <em>forest, time, color, clothes</em>
          </div>
        </section>
        <Results result={result} />
      </div>
    );
  } else {
    load();
    return null;
  }
}

import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Sophie Schou, open sourced on{" "}
          <a
            href="https://github.com/soflil/dictionary-app-react.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Palma de Mallorca" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://heroic-palmier-0df45c.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Laura Moragues
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/llmh3624/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://astounding-sfogliatella-895387.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

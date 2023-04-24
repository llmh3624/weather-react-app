import "./App.css";
import SearchEngine from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="Weather">
        <h1>Weather App</h1>
        <SearchEngine />
      </div>
      <p>
        <a href="https://github.com/llmh3624/weather-react-app" target="_blank">
          Open-source code
        </a>{" "}
        by Laura Moragues
      </p>
    </div>
  );
}

export default App;

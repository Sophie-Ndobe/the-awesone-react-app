import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Search />
      </div>
    </div>
  );
}

export default App;

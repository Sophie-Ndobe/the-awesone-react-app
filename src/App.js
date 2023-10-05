import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Weather App</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;

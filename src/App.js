import "./styles/App.css";
import Article from "./components/Article";

import data from "./assets/codetestjson.json";

function App() {
  return (
    <div className="App">
      <Article data={data} />
    </div>
  );
}

export default App;

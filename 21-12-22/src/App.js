import logo from "./logo.svg";
import "./App.css";
import { Button } from "./component/button/Button";
import { Text } from "./component/text/Text";

function App() {
  return (
    <div className="App">
      <h1 className="Text">CIAO</h1>
      <Button variant="primary" onClick={() => console.log("Bottone 1")}>
        Bottone 1
      </Button>
      <Button variant="secondary" onClick={() => console.log("Bottone 2")}>
        Bottone 2
      </Button>
      <Button variant="tertiary" onClick={() => console.log("Bottone 3")}>
        Bottone 3
      </Button>
    </div>
  );
}

export default App;

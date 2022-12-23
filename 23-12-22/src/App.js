import "./App.css";
import { Button } from "./atoms/button/Button";
import { Text } from "./atoms/text/Text";
import { Todolist } from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <Text />
      <Todolist />
    </div>
  );
}

export default App;

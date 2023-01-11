import "./App.css";
import Beers from "./components/beers/Beers";
import Banks from "./components/banks/Banks";
import Creditcards from "./components/creditcards/Creditcards";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Beers />
      <Banks />
      <Creditcards />
      <Users />
    </div>
  );
}

export default App;

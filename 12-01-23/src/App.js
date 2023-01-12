import "./App.css";
import Beers from "./components/beers/Beers";
import Banks from "./components/banks/Banks";
import Creditcards from "./components/creditcards/Creditcards";
import Users from "./components/users/Users";
import { useState } from "react";

const Selector = (props) => {
  const { selectChangeHandler } = props;

  return (
    <form>
      <select defaultValue={""} onChange={selectChangeHandler}>
        <option disabled value="">
          Select Components
        </option>
        <option value="beers">Beers Selector</option>
        <option value="banks">Banks Selector</option>
        <option value="creditcards">Creditcards Selector</option>
        <option value="users">Users Selector</option>
      </select>
    </form>
  );
};

const defaultComponent = () => {
  return <div>Nothing selected</div>;
};

const componentsMap = {
  beers: Beers,
  banks: Banks,
  creditcards: Creditcards,
  users: Users,
  default: defaultComponent,
};

function App() {
  const [component, setComponent] = useState("default");
  const selectChangeHandler = (e) => {
    setComponent(e.target.value);
  };
  const DynamicComponent = componentsMap[component];

  return (
    <div className="App">
      <Selector selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />
    </div>
  );
}

export default App;

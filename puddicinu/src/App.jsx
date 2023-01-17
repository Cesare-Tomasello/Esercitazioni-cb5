import "./App.css";
import Postcontainer from "./components/postcontainer/Postcontainer";
import Form from "./components/form/Form";
import Friendslist from "./components/friendslist/Friendslist";

function App() {
  return (
    <div className="App">
      <div className="friendsSection">
        <Friendslist />
      </div>
      <div className="mainSection">
        <Form />
        <Postcontainer />
      </div>
    </div>
  );
}

export default App;

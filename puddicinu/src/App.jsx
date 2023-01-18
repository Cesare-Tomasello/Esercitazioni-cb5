import "./App.css";
import Postcontainer from "./components/postcontainer/Postcontainer";
import Form from "./components/form/Form";
import Friendslist from "./components/friendslist/Friendslist";
import Filterlist from "./components/filterlist/Filterlist";
import Sidemenu from "./components/sidemenu/Sidemenu";

function App() {
  return (
    <div className="App">
      <Sidemenu />
      <div className="mainSection">
        <Friendslist />
        <Form />
        <Postcontainer />
      </div>
      <Filterlist />
      {/* <Bottommenu/> */}
    </div>
  );
}

export default App;

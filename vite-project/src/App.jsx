import { useReducer } from "react";
import styles from "./App.module.scss";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "aggiungi":
        return { count: state.count + 1 };
      case "sottrai":
        return { count: state.count - 1 };
      case "azzera":
        return { count: (state.count = 0) };
      default:
        alert("Error");
    }
  };

  const [counter, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className={styles.App}>
      <h1>{counter.count}</h1>
      <div className={styles.buttonsContainer}>
        <button className={styles.handleButton } onClick={() => dispatch({type: "sottrai"})}>Decrement</button>
        <button className={styles.handleButton } onClick={() => dispatch({type: "azzera"})}>Reset</button>
        <button className={styles.handleButton } onClick={() => dispatch({type: "aggiungi"})}>Increment</button>
      </div>
    </div>
  );
}

export default App;

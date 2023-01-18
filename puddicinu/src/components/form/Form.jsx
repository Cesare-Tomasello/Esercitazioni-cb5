import React from "react";
import "./Form.css";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prova Submit");
  };

  return (
    <form className="Form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="formSearch"
        type="search"
        name=""
        id=""
        placeholder="Name"
      />
      <input
        className="formSearch"
        type="search"
        name=""
        id=""
        placeholder="Url"
      />
      <input
        className="formSearch"
        type="search"
        name=""
        id=""
        placeholder="Text"
      />
      <input className="formSubmit" type="submit" value="Post!" />
    </form>
  );
}

export default Form;

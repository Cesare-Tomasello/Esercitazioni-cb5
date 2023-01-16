import React from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <h3>Add a new post</h3>
      <form className="Form">
        <input
          className="formSearch"
          type="search"
          name=""
          id=""
          placeholder="What are you thinking of ?"
        />
        <input className="formSubmit" type="submit" value="Post!" />
      </form>
    </>
  );
}

export default Form;

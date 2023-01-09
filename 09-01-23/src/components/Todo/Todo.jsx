import React from 'react'

const Todo = (props) => {
  const {children, isDone, changeStatus, index} = props;

  const updateTask = () =>{
    changeStatus (index, isDone)
  }

  return (
    <li>
      {isDone ? "✅" : "❌"}
      <span>{children}</span>
      <button onClick={updateTask}>{isDone ? "Non fatto" : "Fatto"}</button>
    </li>
  )
}

export default Todo
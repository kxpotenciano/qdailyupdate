import React from "react";

const AnnPage2 = ({ todos }) => {

  return(
  <div>
    {todos.map((todo, index) => (
      <div className="todo-row" key={index}>{todo}</div>
    ))}
  </div>);
};

export default AnnPage2;
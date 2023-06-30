import React from "react";

const AnnPage2 = ({ todos }) => {

  return(
  <>
    {todos.map((todo, index) => (
      <div className="todo-row" key={index}>{todo}</div>
    ))}
  </>);
};

export default AnnPage2;
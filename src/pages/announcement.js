import React, { useState } from "react";
import AnnPage from "./annPage"
import AnnPage2 from "./annPage2"
import Navbar from '../component/navbar2'

function Announcement() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
  
  return (
    <> <Navbar/> <br/>
      <AnnPage addTodo = { addTodo }/> <br/>
      <AnnPage2 todos={ todos }/>
    </>
  );
} 

export default Announcement;
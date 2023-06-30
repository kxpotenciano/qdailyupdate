import React, { useState } from "react";
import UpdPage from "./updPage"
import UpdPage2 from "./updPage2"
import Navbar from '../component/navbar2'

function Announcement() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
  
  return (
    <> <Navbar/> <br/>
      <UpdPage addTodo = { addTodo }/> <br/>
      <UpdPage2 todos={ todos }/>
    </>
  );
} 

export default Announcement;
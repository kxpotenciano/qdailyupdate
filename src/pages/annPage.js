import React, { useState } from "react";
import Navbar from "../component/navbar2";

function AnnPage(props) {

  const [input, setInput] = useState(" ");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addTodo(input);
  };

  return (
    <div><Navbar/><br/>
    <form className="" onSubmit={handleSubmit}>
      <textarea id="message" rows="4" class="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border 
      border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ANNOUNCEMENT" onChange={handleChange} required/> <br/>

      <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
      focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 
      dark:focus:ring-gray-700 dark:border-gray-700" > 
        POST
      </button>
    </form></div>
  );
}

export default AnnPage;

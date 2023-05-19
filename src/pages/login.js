import React from "react";
import axios from "../api/axios";
import {useState} from "react";
import Navbar from "../component/navbar";

export default function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    
    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: data.email,
          password: data.password
        };
        axios.post("/api/token/", userData).then((response) => {
        console.log(response.status, response.data.token);
            });
        };

    return ( 
        <div>
            <Navbar/>
    <div className="flex flex-col inline-block items-center px-6 py-8 mx-auto md:h-screen lg:py-0"> <br/><br/><br/><br/><br/><br/><br/>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Log In
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address
                        </label>
                        <input 
                        type="email" 
                        autoComplete="off" 
                        name="email" 
                        id="email" 
                        onChange={handleChange}
                        placeholder="abcdefg@abcdefg.com" required="" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label> 
                        <input 
                        type="password" 
                        autoComplete="off" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        onChange={handleChange}
                        required="" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                dark:focus:ring-primary-800"><a href="http://localhost:3000/Mainpage">Log In</a></button>
            </form>
        </div>
    </div>
</div>
</div>
)}
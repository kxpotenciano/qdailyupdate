import React from "react";
import axios from "../api/axios";
import {useState} from "react";

export default function Register() {

        const [data, setData] = useState({
            email: "",
            password: "",
            role: ""
        });
        const [role, setRole] = useState("")

        const roleChange = (event) => {
            setRole(event.target.value)
            console.log(event.target.value)
        }
        
        const handleChange = (e) => {
            const value = e.target.value;
            setData({
              ...data,
              [e.target.name]: value
            });
            setRole(e.target.data.value)
          };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            const userData = {
              email: data.email,
              password: data.password,
              role: role
            };
            axios.post("http://127.0.0.1:8000/register/", userData).then((response) => {
              console.log(response.status, response.data.token);
            });
          };
        
    return ( 
    <section>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address
                    </label>
                    <input 
                    type="email" 
                    autoComplete="off" 
                    name="email" 
                    id="email" 
                    value={data.email}
                    onChange={handleChange}
                    placeholder="abcdefg@abcdefg.com" required="" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                   </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label> 
                    <input 
                    type="password" 
                    autoComplete="off" 
                    name="password" 
                    id="password" 
                    placeholder="••••••••" 
                    value={data.password}
                    onChange={handleChange} 
                    required="" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                    <select placeholder="Select Role" value={data.role} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={roleChange}>
                        <option value="" disabled selected>Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Staff">Staff</option>
                    </select>
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
            </form>
        </div>
    </div>
</div>
</section>
)
}
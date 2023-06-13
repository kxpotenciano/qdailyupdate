import React from 'react'
import Navbar from '../component/navbar2'
const Announcements = () => {
  return (
    <div>
      <Navbar/>
      <p>Announcements</p>
      <form className="space-y-4 md:space-y-6">
        <input type="text" autoComplete="off"  name="announcement" id="announcement" placeholder="type here" required=""  className="bg-gray-50 border 
        border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><a href="#">Post</a></button>
      </form>
    </div>
  )
}

export default Announcements

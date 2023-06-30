import React from 'react'

function Modal({closeModal}){
    return(
        <div>
            <div>
                <div>
                    <button onClick={() => closeModal(false)}>Close</button> <br/>
                </div>
                <div>
                    <form>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96" 
                    placeholder="Write Here"></textarea> <br/>
                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium 
                    rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Post</button>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default Modal;
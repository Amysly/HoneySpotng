import React from 'react'
//import { Link } from 'react-router-dom'

const Button = ({onClick, children}) => {
  return (
    <button
    type='button'
    onClick={onClick}
         className="mt-4 bg-green-700 text-white font-bold font-roboto  py-2 px-4 
        rounded-full hover:bg-green-600 transition shadow-lg">
          {children}
    </button>
  )
}

export default Button

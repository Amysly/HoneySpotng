import React from 'react'
//import { Link } from 'react-router-dom'

const Button = ({onClick}) => {
  return (
    <div
    onClick={onClick}
         className="mt-4 bg-green-700 text-white font-bold py-2 px-4 
        rounded-full hover:bg-green-600 transition shadow-lg">
    </div>
  )
}

export default Button

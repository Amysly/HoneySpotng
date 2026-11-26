import React from 'react'
//import { Link } from 'react-router-dom'

const Button = ({onClick, children}) => {
  return (
    <button
    type='button'
    onClick={onClick}
         className=" bg-emerald-800 hover:bg-emerald-900 text-white font-bold font-roboto  py-2 px-4 
        rounded-full transition shadow-lg">
          {children}
    </button>
  )
}

export default Button

import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
        <Link to='/products' className="mt-4 bg-green-700 text-white font-bold py-2 px-4 
        rounded-full hover:bg-green-600 transition shadow-lg">
        Explore Our Honey
        </Link>

    </div>
  )
}

export default Button

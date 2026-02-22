import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar' 
import Footer from '../../pages/Footer'
import ScrollUpButton from "../ScrollUpButton";

const Mainlayout = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      <ScrollUpButton/>
    </>
  )
}

export default Mainlayout
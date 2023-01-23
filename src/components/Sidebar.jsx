import React from 'react';
import { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react';



const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  }
  return (
  <>
  <div className="absolute z-20 text-white text-2xl top-7 right-10" onClick={handleClick}>
  {isOpen ? <Hamburger toggled={isOpen} size={20}/> : <Hamburger toggle={!isOpen} size={20}/> }
  </div>

    {isOpen && 
    <div className="bg-black absolute top-0 right-0 transition-all ease-in-out">
      <ul className="flex flex-col text-right justify-center text-semibold uppercase gap-2 p-10 h-[100vh] w-[300px] ">
        <a>mission</a>
        <a>launches</a>
        <a>careers</a>
        <a>update</a>
        <a>shop</a>
      </ul>          
    </div>}
  
  </>

  )
}

export default Sidebar
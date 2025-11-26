import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Sacola from "../assets/sacola.png"


const Navbar = ({ onEndClick }) => {
       const navigate = useNavigate();

   const handleNavigateToMenu = () => {
      navigate('/menu');
   }
   const handleNavigateTologin = () => {
      navigate('/login');
   }
      const handleNavigateToInicio = () => {
      navigate('/');
   }

    const handleNavigateToCesto= () => {
      navigate('/cesto');
   }

   const handClickEnd = () => {
      if (typeof onEndClick === 'function') onEndClick();
      else console.warn('Navbar: onEndClick not provided')
   }

    return (
    <>
    <div className="bg-[#E7DAD1] w-screen h-20 flex flex-row items-center justify-between">
        <div className="flex items-center justify-center border-[#E7DAD1] ml-30 rounded-full shadow-[1px_9px_8px_3px_rgba(0,_0,_0,_0.3)]">
            <img src={logo} onClick={handleNavigateToInicio} alt="Logo" className="h-18"/>
        </div>
        <div className="flex flex-row gap-15 mr-40 text-[20px] font-[jost] font-bold text-[#6F4F28]  ">
           <button onClick={handleNavigateToInicio}>Inicio</button>
           <button onClick={handleNavigateToMenu}>Menu</button>
           <button onClick={handClickEnd}>Endereço</button>
           <button onClick={handleNavigateTologin}>Login</button>
           <img src={Sacola} onClick={handleNavigateToCesto} alt=""/>
        </div>
    </div>
    </>


    )
}

export default Navbar;
import React from "react";
import logo from "../assets/logo.png";


const Navbar = () => {
    return (
    <>
    <div className="bg-[#E7DAD1] w-screen h-20 flex flex-row items-center justify-between">
        <div className="flex items-center justify-center border-[#E7DAD1] ml-30 rounded-full shadow-[1px_9px_8px_3px_rgba(0,_0,_0,_0.3)]">
            <img src={logo} alt="Logo" className="h-18"/>
        </div>
        <div className="flex flex-row gap-15 mr-40 text-[20px] font-[just] font-thin text-[#6F4F28]  ">
           <button>Inicio</button>
           <button>Menu</button>
           <button>Sobre Nós</button>
           <button>Locais</button>
           <button>Contato</button>
           <a href="">Login</a>
        </div>
    </div>
    </>


    )
}

export default Navbar;
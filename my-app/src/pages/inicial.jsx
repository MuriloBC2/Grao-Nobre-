import React from "react";  
import logo from "../assets/logo.png";
import cafe_inicio from "../assets/cafe_inicio.png";
import arte_fundo_inicial from "../assets/arte_fundo_inicio.png";
import Navbar from "../components/navbar.jsx";

const Inicial = () => {
  return (
 <>
    <Navbar/>
   <div  className="h-screen w-screen  flex justify-center items-center bg-[url('assets/arte_fundo_inicio.png')] bg-cover flex flex-row items-center justify-center">
   <div className="flex flex-col w-160 h-150  text-[#C0977D] font-bold font-[just] font-thin ">
    <h1 className="text-[60px] ">O pão que você ama, agora <span className="text-[#6F4F28]">entregue em minutos</span></h1>
    <p className="text-[24px]">Com o <span className="text-[#6F4F28]">Minha Sacola</span>, você seleciona seus pães, cafés e doces favoritos e nosso motoqueiro leva o sabor até você em minutos</p>
    <div className=" mt-20 space-x-5">
        <button className="w-[255px] h-[64px]  bg-[#9B5C42] text-white">Minha Sacola</button>
        <button className="w-[255px] h-[64px]  bg-[#C0977D] text-white">Como Funcioa ?</button>
    </div>
   </div>
   <div className="ml-10  mb-20">
      <img src={cafe_inicio} alt="Logo" className="h-[572px] w-[570px]"/>
   </div>
    
   </div>

</>
  )
}
 export default Inicial;
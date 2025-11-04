import React from "react";  
import cafe_inicio from "../assets/cafe_inicio.png";
import arte_fundo_inicial from "../assets/arte_fundo_inicio.png";
import arte_inicial_2 from "../assets/image-inic-2.jpg";
import cel_inicio from "../assets/cel-inic.png";
import chef_inicio from "../assets/chef-inic.png";
import carri_inicio from "../assets/carri-inic.png";
import Navbar from "../components/navbar.jsx";
import Menu from "../components/menu.jsx";

const Inicial = () => {
  return (
 <>
    <Navbar/>
   <div  className="h-screen w-screen  flex justify-center items-center">
   <img src={arte_fundo_inicial} alt="Fundo" className="absolute  w-screen h-screen opacity-30 object-cover"/>
   <div className="flex flex-col w-160 h-150  text-[#C0977D]  font-[jost] ">
    <h1 className="text-[60px] ">O pão que você ama, agora <span className="text-[#6F4F28]">entregue em minutos</span></h1>
    <p className="text-[24px]">Com o <span className="text-[#6F4F28]">Minha Sacola</span>, você seleciona seus pães, cafés e doces favoritos e nosso motoqueiro leva o sabor até você em minutos</p>
    <div className=" mt-20 space-x-5">
        <button className="w-[255px] h-[64px]  bg-[#9B5C42] text-white text-[24px]">Minha Sacola</button>
        <button className="w-[255px] h-[64px]  bg-[#C0977D] text-white text-[24px]">Como Funciona ?</button>
    </div>
   </div>
   <div className="ml-10  mb-20">
      <img src={cafe_inicio} alt="Logo" className="h-[502px] w-[570px] object-cover"/>
   </div>
   </div>
   <div className="h-screen w-screen flex justify-center items-center bg-[#A45434BD] flex-col">
    <img src={arte_inicial_2} alt="Fundo" className="absolute  w-screen h-screen opacity-15 object-cover"/>
    <h1 className="text-[40px] text-white font-[jost]">3 Passos Simples Para Seu Café Perfeito</h1>
    <div className="flex flex-row">
      <div className="flex flex-col justify-center items-center space-y-2 m-10">
         <img src={cel_inicio} alt="celular" className="w-[315px] h-[315px]"/>
         <p className="text-center bg-[#9B5C42] font-[jost] text-[30px] text-white w-[263px] h-[172px] rounded-3xl ">Navegue pelo cardápio e escolha seus produtos favoritos</p>
      </div>
       <div className="flex flex-col justify-center items-center space-y-2 m-10">
         <img src={carri_inicio} alt="celular" className="w-[315px] h-[315px]"/>
         <p className="text-center bg-[#9B5C42] font-[jost] text-[30px] text-white w-[263px] h-[172px] rounded-3xl pt-5 ">Nossos padeiros preparam tudo com carinho</p>
      </div>
       <div className="flex flex-col justify-center items-center space-y-2 m-10">
         <img src={chef_inicio} alt="celular" className="w-[315px] h-[315px]"/>
         <p className="text-center bg-[#9B5C42] font-[jost] text-[30px] text-white w-[263px] h-[172px] rounded-3xl  pt-9">Levamos os pedidos fresquinhos até você</p>
      </div>
    </div>
   </div>

   <Menu/>

</>
  )
}
 export default Inicial;
import React from "react";
import fundo_menu from "../assets/fundo_menu.png"
import croassan from "../assets/items/croassan.png"
import pao_de_queijo from "../assets/items/pao_de_queijo.png"
import torta_de_morango from "../assets/items/torta_de_morango.png"


const MenuSample = () => {
 

    return(
        <>
        <div  className="h-screen w-screen  flex justify-center items-center flex-col">
            <img src={fundo_menu} alt="Fundo" className="absolute  w-screen h-screen opacity-30 object-cover -z-40 "/>
            <p className="text-[64px] text-[#6F4F28] font-[imbue] mt-10">Menu</p>
            <p className="text-[30px] text-[#6F4F28] font-[imbue] mt-5 mb-10">Nossas delícias feitas com amor e tradição</p>

            <div className="flex flex-row justify-center items-center gap-4">
                <div className="flex flex-col  "> 
                <div className="w-[255px] h-[249px] bg-[#C0977D] rounded-t-4xl">
                <img src={cafe} alt="" className="w-[267px] h-[249px]" />
                </div>
                    <div className="w-[255px] h-[119px] bg-[#A67B5B] text-center">
                        <p className="mt-5 text-[40px] font-[abel] text-white">Cafés</p>
                        <button className="w-[135px] h-[58px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
                    </div>
                </div>
                 <div className="flex flex-col  "> 
                    <div className="w-[255px] h-[249px] bg-[#C0977D] rounded-t-4xl flex justify-center items-center">
                <img src={croassan} alt="" className="w-[233px] h-[140px]" />
                </div>
                    <div className="w-[255px] h-[119px] bg-[#A67B5B] text-center">
                        <p className="mt-5 text-[40px] font-[abel] text-white">Croissant</p>
                        <button className="w-[135px] h-[58px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
                    </div>
                </div>
                 <div className="flex flex-col  "> 
                  <div className="w-[255px] h-[249px] bg-[#C0977D] rounded-t-4xl">
                <img src={pao_de_queijo} alt="" className="w-[267px] h-[249px]" />
                </div>
                    <div className="w-[255px] h-[119px] bg-[#A67B5B] text-center">
                        <p className="mt-5 text-[40px] font-[abel] text-white">Pão de queijo</p>
                        <button className="w-[135px] h-[58px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
                    </div>
                </div>
                 <div className="flex flex-col "> 
                <div className="w-[255px] h-[249px] bg-[#C0977D] rounded-t-4xl">
                <img src={torta_de_morango} alt="" className="w-[267px] h-[249px]" />
                </div>
                    <div className="w-[255px] h-[119px] bg-[#A67B5B] text-center">
                        <p className="mt-5 text-[40px] font-[abel] text-white">Tortas</p>
                        <button className="w-[135px] h-[58px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
                    </div>
                </div>
            </div>

            <button className=" mt-20 w-[311px] h-[64px] bg-[#6F4F28] text-white text-[30px]">Menu Completo</button>
        </div>
        </>
    )
}

export default MenuSample
import React from "react";
import fundo_menu from "../assets/fundo_menu.png"
import cafe from "../assets/cafe.png"
import croassan from "../assets/croassan.png"
import pao_de_queijo from "../assets/pao_de_queijo.png"
import torta_de_morango from "../assets/torta_de_morango.png"


const Menu = () => {


    return(
        <>
         <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6F4F28" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,133.3C672,128,768,96,864,85.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div  className="h-screen w-screen  flex justify-center items-center flex-col bg-[#C0977D]">
            <p className="text-[64px] text-[#6F4F28] font-[imbue] mt-20">Menu</p>

            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col"> 
                <img src={cafe} alt="" className="w-[267px] h-[249px]" />
                    <div className="w-[255px] h-[119px] bg-[#A67B5B] text-center">
                        <p className="mt-5 text-[40px] font-[abel] text-white">Cafés</p>
                        <button className="w-[135px] h-[58px] border-2 border-[#6F4F28] bg-[#B18959]">Pedir</button>
                    </div>
                </div>
                 <div className="flex flex-col"> 
                <img src={croassan} alt="" className="w-[267px] h-[249px]" />
                    <div className="w-[255px] h-[119px] bg-[#A67B5B] text-center">
                        <p className="mt-5 text-[40px] font-[abel] text-white">Croissant</p>
                        <button className="w-[135px] h-[58px] border-2 border-[#6F4F28] bg-[#B18959]">Pedir</button>
                    </div>
                </div>
                 <div className="flex flex-col"> 
                <img src={pao_de_queijo} alt="" className="w-[267px] h-[249px]" />
                    <div className="w-[255px] h-[119px] bg-[#A67B5B] text-center">
                        <p className="mt-5 text-[40px] font-[abel] text-white">Pão de queijo</p>
                        <button className="w-[135px] h-[58px] border-2 border-[#6F4F28] bg-[#B18959]">Pedir</button>
                    </div>
                </div>
                 <div className="flex flex-col"> 
                <img src={torta_de_morango} alt="" className="w-[267px] h-[249px]" />
                    <div className="w-[255px] h-[119px] bg-[#A67B5B] text-center">
                        <p className="mt-5 text-[40px] font-[abel] text-white">Tortas</p>
                        <button className="w-[135px] h-[58px] border-2 border-[#6F4F28] bg-[#B18959]">Pedir</button>
                    </div>
                </div>
            </div>

            <button className=" mt-10 w-[311px] h-[64px] bg-[#A67B5B] text-white text-[30px]">Menu Completo</button>
        </div>
        </>
    )
}

export default Menu
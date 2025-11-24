import React from "react";
import cafe from "../assets/items/cafe.png"
import chocolate from "../assets/items/achocolatado.png"
import suco from "../assets/items/suco.png"
import croassan from "../assets/items/croassan.png"
import pao_de_queijo from "../assets/items/pao_de_queijo.png"
import pao from "../assets/items/pao-da-casa.png"
import baguete from "../assets/items/baguete.png"
import torta_de_morango from "../assets/items/torta_de_morango.png"
import doce from "../assets/items/doce.png"
import doce_chocolate from "../assets/items/doce_de_chocolate.png"
import bolo from "../assets/items/bolo.png"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";

const Menu = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center flex-col">
    <h1 className="flex justify-center font-[Krub] text-[50px] text-[#6F4F28] mb-4" >Menu</h1>
    <div className="flex flex-col w-[1182px] h-[1120px] border-3 border-[#A67B5B] rounded-3xl">
    <div className="flex flex-row justify-center gap-3 m-9">
        <div className="flex flex-row  gap-7  "> 
            <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={cafe} alt="" className="w-[207px] h-[193px]" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-5 text-[40px] font-[abel] text-white">Cafés</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
            
                  <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={chocolate} alt="" className="w-[271px] h-[183px] " />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-5 text-[40px] font-[abel] text-white">Chocolate</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
            
               <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={suco} alt="" className="w-[201px] h-[201px]" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-5 text-[40px] font-[abel] text-white">Suco</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>

            <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={cafe} alt="" className="w-[201px] h-[201px]" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-5 text-[40px] font-[abel] text-white">Cafés</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
        </div>

    </div>

    <div className="flex flex-row justify-center gap-3 m-9">
        <div className="flex flex-row  gap-7  "> 
            <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={croassan} alt="" className="w-[201px] h-[201px] object-contain" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-5 text-[40px] font-[abel] text-white">Croassan</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
            
                  <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={pao_de_queijo} alt="" className="w-[201px] h-[201px]" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-5 text-[37px] font-[abel] text-white">Pão de Queijo</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
            
               <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={pao} alt="" className="w-[201px] h-[201px]" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-5 text-[40px] font-[abel] text-white">Pão frances</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>

            <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={baguete} alt="" className="w-[201px] h-[201px]" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-5 text-[40px] font-[abel] text-white">Baguete</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
        </div>
    </div>

    <div className="flex flex-row justify-center gap-3 m-9">
        <div className="flex flex-row  gap-7  "> 
            <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl flex justify-center items-center">
                <img src={bolo} alt="" className="w-[210px] h-[157px] object-cover " />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-7 text-[25px] font-[abel] text-white">Bolo de Chocolate</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
            
                  <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={torta_de_morango} alt="" className="w-[201px] h-[201px]" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-7 text-[25px] font-[abel] text-white">Torta de morango</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
            
               <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl flex justify-center items-center">
                <img src={doce_chocolate} alt="" className="w-[185px] h-[128px] object-cover" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-7 text-[25px] font-[abel] text-white">Doce q n sei</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>

            <div className="flex flex-col">
            <div className="w-[213px] h-[201px] bg-[#C0977D] rounded-t-4xl">
                <img src={doce} alt="" className="w-[201px] h-[201px]" />
          </div>
            <div className="w-[213px] h-[78px] bg-[#A67B5B] text-center flex flex-col items-center justify-center">
                <p className="mt-7 text-[25px] font-[abel] text-white">N sei o nome</p>
                <button className="w-[135px] h-[65px] border-2 border-[#6F4F28] bg-[#6F4F28] text-white text-[24px]">Pedir</button>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
} 
export default Menu;

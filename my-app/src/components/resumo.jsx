import React from "react";
import  {useState} from "react";
import ModalEntrega from "./modalentrega.jsx";
import ModalFinalPedido from "./modalfinalpedido.jsx";

const Resumo = ({ carrinho }) => {

    const [openModal, setOpenModal] = useState(false);
    const [finalOpen, setFinalOpen] = useState(false);

    const calcularTotal = () => {
        return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
    };
    return (    
        <>        <div className="m-10 bg-[#E2E2E2] rounded-2xl shadow-lg p-6 border border-[#6F4F28">
            <h1 className="text-3xl text-[#6F4F28] mb-4">Resumo do Pedido</h1>
            <div className="flex flex-col gap-4">
                {carrinho.map(item => (
                    <div key={item.id} className="flex justify-between">
                        <p className="text-[18px] font-[jost] text-[#6F4F28]">{item.nome} x{item.quantidade}</p>
                        <p className="text-[18px] font-[jost] text-[#6F4F28]">R${item.preco * item.quantidade}</p>
                    </div>
                ))}
            </div>  
            <div className="border-t border-[#A67B5B] mt-4 mb-4 pt-4 flex justify-between">
                <h2 className="text-[20px] font-[jost] text-[#6F4F28] font-bold">Total:</h2>
                <p className="text-[20px] font-[jost] text-[#6F4F28] font-bold">R${calcularTotal()}</p>
            </div>
            <button className="w-full h-10 bg-[#A67B5B] text-white rounded-md" onClick={() => setOpenModal(true)}>Finalizar Pedido</button>
        </div>

        <ModalEntrega
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            onConfirm={() => {
                setOpenModal(false);
                setFinalOpen(true);
            }}
        />

        <ModalFinalPedido isOpen={finalOpen} onClose={() => setFinalOpen(false)} />
        </>

    );
}

export default Resumo;
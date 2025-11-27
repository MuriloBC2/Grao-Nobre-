import React from "react";
import { CiUser } from "react-icons/ci";

export default function ModalEntrega({ isOpen = false, onClose = () => {}, onConfirm = () => {} }) {
    if (!isOpen) return null;

    const handleConfirm = () => {
        try {
            if (typeof onConfirm === 'function') onConfirm();
        } finally {
            onClose();
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-[#E2E2E2] rounded-xl p-6 w-[90%] max-w-3xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[25px] text-[#6F4F28] ml-60">Falta pouco para finalizar</h1>
                    <button
                        aria-label="Fechar"
                        onClick={onClose}
                        className="text-xl font-bold"
                    >
                        ✕
                    </button>
                </div>

                <p className=" flex flex-row mb-4 text-[25px] font[jost] text-[#6F4F28]"> <CiUser size={25} className="icon-input mt-1.5 mr-2" />Dados da Entrega</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                        className="border border-[#6F4F28] h-[54px] w-[px] p-2 rounded text-[#6F4F28]"
                        type="text"
                        placeholder="CEP *"
                    />
                    <input
                        className="border border-[#6F4F28] h-[54px] w-[px] p-2 rounded text-[#6F4F28]"
                        type="text"
                        placeholder="Telefone *"
                    />
                    <input
                        className="border border-[#6F4F28] h-[54px] w-[px] p-2 rounded text-[#6F4F28]"
                        type="text"
                        placeholder="Rua"
                    />
                    <input
                        className="border border-[#6F4F28] h-[54px] w-[px] p-2 rounded text-[#6F4F28]"
                        type="text"
                        placeholder="Número"
                    />
                </div>

                <div className=" mt-10 h-[80px] border border-[#6F4F28] bg-[#E7DAD1] rounded-2xl flex flex-col  justify-center">
                    <div className="flex flex-row justify-between">
                    <p className="text-[30px] ml-2 text-[#6F4F28]">Total do pedido:</p>
                    <p className="text-[30px] mr-2 text-[#6F4F28]">$$</p>
                    </div>
                    <p className=" mt-2 ml-2 text-[#6F4F28] text-[15px] ">O Pagamento é efetuado na entrega do Pedido.</p>
                </div>


                <div className="mt-10 flex justify-end">
                    <button
                        className="bg-[#6F4F28] text-white px-4 py-2 rounded mr-2"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button className="bg-[#A67B5B] text-white px-4 py-2 rounded" onClick={handleConfirm}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}
import React from "react";

export default function ModalFinalPedido({ isOpen = false, onClose = () => {}, orderNumber = null }) {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/40 flex items-center justify-center"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-2xl font-bold mb-2">Pedido realizado!</h2>
				<p className="mb-4">Parabéns — seu pedido foi confirmado com sucesso.</p>
				<p className="mb-6">Em breve receberá atualizações sobre a entrega.</p>
				<div className="flex justify-center">
					<button
						className="bg-[#6F4F28] text-white px-6 py-2 rounded"
						onClick={onClose}
					>
						Ok
					</button>
				</div>
			</div>
		</div>
	);
}

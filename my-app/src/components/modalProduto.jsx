import axios from 'axios';

const ModalProduto = ({ produto, fechar }) => {

  return (

    <div className="fixed inset-0 bg-opacity-50 flex items-center   justify-center">
        
       
      <div className="bg-white p-6 w-[556px] h-[550px] text-center bg-[#E7DAD1] border border-[#A67B5B] flex flex-col justify-center items-center rounded-2xl">
         <img src={`imagens/${produto.imagem}`} alt={produto.nome} className="w-[390px] h-[280px] rounded-3xl"/>
        <h1 className="text-[40px] font-[jost] text-[#A67B5B] mb-4">{produto.nome}</h1>
        
        
        <div>
        <button onClick={() => axios.post('http://localhost/api/carrinho/adicionar', { 
            produto_id: produto.id, 
            quantidade: 1,
            cliente_id: 1
        })
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
} 
            className="w-[390px] h-[52px] bg-[#9B5C42] text-white rounded-2xl mb-2">
            Adicionar a sacola 
        </button>
        <div className='flex flex-row justify-center gap-3'>
        <button  className="w-[156px] h-[52px] bg-[#A67B5B] text-white rounded-2xl mb-2">Abrir sacola</button>
        <button  onClick={fechar} className="w-[156px] h-[52px] bg-[#E2E2E2] text-[#A67B5B] rounded-2xl p-1">Continar comprando</button>
        </div>
        </div>
      </div>

    </div>
  );
};

export default ModalProduto;
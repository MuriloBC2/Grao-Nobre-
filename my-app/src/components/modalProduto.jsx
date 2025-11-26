import axios from 'axios';

const ModalProduto = ({ produto, fechar }) => {

  return (

    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">

      <div className="bg-white p-6 w-96 text-center">
        <button onClick={fechar}>X</button>
        <h1 className="text-xl mb-4">{produto.nome}</h1>
        <img src={`imagens/${produto.imagem}`} alt={produto.nome} className="w-40"/>
        <p className="text-gray-600">{produto.descricao}</p>
        <p className="text-lg font-bold mt-2">R$ {produto.preco}</p>

        <button onClick={() => axios.post('http://localhost/api/carrinho/adicionar', { 
            produto_id: produto.id, 
            quantidade: 1,
            cliente_id: 1
        })
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Adicionar
        </button>
      </div>

    </div>
  );
};

export default ModalProduto;
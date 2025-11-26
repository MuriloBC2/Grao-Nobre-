import axios from 'axios';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import { useState, useEffect } from 'react';

const Cesto = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/api/carrinho/listar/1')
        .then(response => { 
            setProdutos(response.data);
        })
        .catch(error => {
            console.error('Erro ao buscar itens do cesto:', error);
        });
    }, []);

  return (  
    <>
        
        <Navbar/>
        <div className='w-screen h-screen bg-[#E3D5CB]'>
            <h1>Seu Cesto</h1>

            <div className='m-10 p-10 bg-[#E2E2E2] rounded-2xl shadow-lg w-[60%]'>
                {produtos.map(produto => (
                    <div key={produto.id} className='grid grid-cols-4'>
                        <img src={`imagens/${produto.imagem}`} alt="foto" />
                        <h2>{produto.nome}</h2>
                        <div className='flex border rounded-md w-45.5 h-7'>
                        <button className='border rounded-md w-10'>-</button><p>Quantidade: {produto.quantidade}</p><button className='border rounded-md w-10'>+</button>
                        </div>
                        <p>Preço: R$ {produto.preco}</p>
                    </div>
                ))}

            </div>
        </div>

        <Footer/>

    </>
  )
}

export default Cesto;
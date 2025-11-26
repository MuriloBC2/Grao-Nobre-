import axios from 'axios';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import { useState, useEffect, use } from 'react';
import { SlTrash } from "react-icons/sl";
import { IoMdArrowBack } from "react-icons/io";
import Resumo from '../components/resumo.jsx';
import { useNavigate } from 'react-router-dom';

const Cesto = () => {
      
    const navigate = useNavigate();


    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/api/carrinho/listar/1')
        .then(response => { 
            setCarrinho(response.data);
                setProdutos(prevProdutos => 
                prevProdutos.map(produto => 
                    produto.id === carrinho.id
                    ? { ...produto, quantidade: produto.quantidade + 1 }
                    : produto
                )
            );
        })
        .catch(error => {
            console.error('Erro ao buscar itens do cesto:', error);

        });
    }, []);

    const aumentarQuantidade = (item) => {
        axios.put(`http://localhost/api/carrinho/atualizar/${item.id}`, {
            quantidade: item.quantidade + 1
        })
        .then(() => {
            setCarrinho(prev => prev.map(c => c.id === item.id ? { ...c, quantidade: c.quantidade + 1 }: c) );
        })
        .catch(error => {
            console.error('Erro ao atualizar quantidade:', error);
        });
    };

    const diminuirQuantidade = (item) => {
        if (item.quantidade <= 1) return;   
        axios.put(`http://localhost/api/carrinho/atualizar/${item.id}`, {
            quantidade: item.quantidade - 1
        })
        .then(() => {   
            setCarrinho(prev => prev.map(c => c.id === item.id ? { ...c, quantidade: c.quantidade - 1 }: c) );
        })
        .catch(error => {
            console.error('Erro ao atualizar quantidade:', error);
        });
    };

    const removerItem = (item) => {
        axios.delete(`http://localhost/api/carrinho/remover/${item.id}`)
        .then(() => {
            setCarrinho(prev => prev.filter(c => c.id !== item.id));
        })
        .catch(error => {
            console.error('Erro ao remover item do cesto:', error);
        });
    };

   const handleNavigateToMenu = () => {
      navigate('/menu');
   }

  return (  
    <>
        
        <Navbar/>
        <div className='w-screen h-screen bg-[#E3D5CB] '>
            <h1 className='text-[40px] font-[] ml-10 mt-2 text-[#6F4F28]'>Seu Cesto</h1>
            <div className='flex'>
                <div className='m-10 bg-[#E2E2E2] shadow-lg p=6 border border-[#6F4F28] rounded-2xl w-[65%] pb-10'>
                    <div className=' bg-[#A67B5B] rounded-t-lg p-2 text-white border border-[#6F4F28] '>
                        <nav className='grid grid-cols-4'>
                            <p>Produtos</p>
                            <p>Preço</p>
                            <p>Quantidade</p>
                            <p>Total</p> 
                        </nav>
                    </div>
                    {carrinho.map(produto => (
                        <div key={produto.id} className='grid grid-cols-4 text-center items-center p-2'>
                            <div className='flex'>
                                <img src={`imagens/${produto.imagem}`} alt="foto" className='w-24 h-24 rounded-lg' />
                                <div className='flex flex-col justify-center gap-1 ml-4'>
                                    <h2 className='text-[#A67B5B] text-xl'>{produto.nome}</h2>
                                    <button className=' flex items-center text-[#E54560] text-xs' onClick={() => removerItem(produto)}> <SlTrash /> Remover</button>
                                </div>
                            </div>
                            
                            <p className='text-[#6F4F28]  flex flex-start'>R${produto.preco}</p>

                            <div className="flex items-center border border-[#6F4F28] rounded-md w-24 h-10">
                                <button className="flex-1 flex justify-center items-center text-[#6F4F28] text-xl" onClick={() => diminuirQuantidade(produto)}>-</button>
                                <p className="flex-1 flex justify-center items-center text-[#6F4F28] text-lg border-x border-[#6F4F28]">
                                    {produto.quantidade}
                                </p>
                                <button className="flex-1 flex justify-center items-center text-[#6F4F28] text-xl" onClick={() => aumentarQuantidade(produto)}>+</button>
                            </div>

                            <p className='text-[#9B5C42] flex flex-start'>R${produto.preco * produto.quantidade}</p>
                        </div>
                    ))}

                </div>

                < Resumo carrinho={carrinho} />
            </div>

            <button onClick={handleNavigateToMenu} className='flex items-center ml-10'><IoMdArrowBack />Continuar comprando</button>
        </div>
        <Footer/>

    </>
  )
}

export default Cesto;
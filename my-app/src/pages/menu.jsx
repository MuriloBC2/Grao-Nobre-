import axios from "axios";
import { useEffect, useState } from "react";
import ModalProduto from "../components/modalProduto";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

const Menu = () => { 

    
    const [produtos, setProdutos] = useState([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    useEffect(() => {   
        axios.get('http://localhost/api/produtos/listar')
        .then(response => {
            setProdutos(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the products!', error);
        });
    }, []);

    function abrirModal(produto) {
        setProdutoSelecionado(produto);
        console.log(produto);
    }

    function fecharModal() {  
        setProdutoSelecionado(null);
    }
    
return (
  <>
<Navbar/>
<div className="flex justify-center items-center flex-col mt-5">
  <h1 className="text-[50px] font-[imbue] text-[#6F4F28] font-light">Nossos Produtos</h1>
  <p className="font-[jost] text-[30px] font-extralight text-[#A67B5B] ">Qualidade Artesanal em cada criação</p>
</div>

<div className="p-4 m-4">
  <h1 className="text-[40px] font-[jost] text-[#6F4F28] ">Bebidas</h1>
  <div className="grid grid-cols-4 gap-4">
      {produtos.map(produto => {
      if (produto.categoria === 'bebidas') {
        return (
          <div key={produto.id} className="rounded-4xl bg-amber-50 shadow-[36px_9px_12px_-2px_rgba(0,_0,_0,_0.1)]">
            <img src={`imagens/${produto.imagem}`} alt={produto.imagem} className="h-[239px] w-[312px] rounded-t-4xl"/>
            <div className="p-5">
            <h2 className="text-[30px] text-[#A67B5B] font-[jost]" >{produto.nome}</h2>
            <p className="text-[18px] font-[jost] text-[#6F4F28]">{produto.descricao}</p>
            <div className="flex flex-row gap-50">
            <p className="text-[18px] font-[jost] text-[#6F4F28]">{produto.preco}</p>
            <button onClick={()=> abrirModal(produto)} className="bg-[#A67B5B] w-[32px] h-[33px] rounded-[10px] text-[32px] flex justify-center items-center pb-2 text-amber-50 ">+</button>
            </div>
            </div>
          </div>
          
        );
    }})}
    </div>
</div>

<div className="p-4 m-4" >
  <h1 className="text-[40px] font-[jost] text-[#6F4F28] ">Pães</h1>
  <div className="grid grid-cols-4 gap-4 ">
      {produtos.map(produto => {
      if (produto.categoria === 'pães') {
        return (
          <div key={produto.id} className="rounded-4xl bg-amber-50 shadow-[36px_9px_12px_-2px_rgba(0,_0,_0,_0.1)]">
            <img src={`imagens/${produto.imagem}`} alt={produto.imagem} className="h-[239px] w-[312px] rounded-t-4xl"/>
            <div className="p-5">
            <h2 className="text-[30px] text-[#A67B5B] font-[jost]">{produto.nome}</h2>
             <p className="text-[18px] font-[jost] text-[#6F4F28]">{produto.descricao}</p>
             <div className="flex flex-row gap-50">
           <p className="text-[18px] font-[jost] text-[#6F4F28]">{produto.preco}</p>
           <button onClick={()=> abrirModal(produto)} className="bg-[#A67B5B] w-[32px] h-[33px] rounded-[10px] text-[32px] flex justify-center items-center pb-2 text-amber-50 ">+</button>
          </div>
          </div>
          </div>
        );
    }})}
  </div>
</div>

<div className="p-4 m-4">
  <h1 className="text-[40px] font-[jost] text-[#6F4F28] ">Doces</h1>
  <div className="grid grid-cols-4 gap-4 ">
      {produtos.map(produto => {
      if (produto.categoria === 'doces') {
        return (
          <div key={produto.id} className="rounded-4xl bg-amber-50 shadow-[36px_9px_12px_-2px_rgba(0,_0,_0,_0.1)]">
            <img src={`imagens/${produto.imagem}`} alt={produto.imagem} className="h-[239px] w-[312px] rounded-t-4xl"/>
            <div className="p-5">
            <h2 className="text-[30px] text-[#A67B5B] font-[jost]">{produto.nome}</h2>
            <p className="text-[18px] font-[jost] text-[#6F4F28]">{produto.descricao}</p>
            <div className="flex flex-row gap-50">
            <p className="text-[18px] font-[jost] text-[#6F4F28]">{produto.preco}</p>
           <button onClick={()=> abrirModal(produto)} className="bg-[#A67B5B] w-[32px] h-[33px] rounded-[10px] text-[32px] flex justify-center items-center pb-2 text-amber-50 ">+</button>
            </div>
            </div>
          </div>
        );
    }})}
  </div>
</div>
<Footer/>

    {produtoSelecionado && (
      <ModalProduto produto={produtoSelecionado} fechar={fecharModal} />
    )}
  </>
);
} 
export default Menu;

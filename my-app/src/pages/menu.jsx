import axios from "axios";
import { useEffect, useState } from "react";
import ModalProduto from "../components/modalProduto";

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

<div className="p-4 m-4">
  <h1>Bebidas</h1>
  <div className="grid grid-cols-4 gap-4">
      {produtos.map(produto => {
      if (produto.categoria === 'bebidas') {
        return (
          <div key={produto.id} className="border">
            <img src={`imagens/${produto.imagem}`} alt={produto.imagem} className="h-[312px] w-[312px]"/>
            <h2>{produto.nome}</h2>
            <h2>{produto.descricao}</h2>
            <h2>{produto.preco}</h2>
            <button onClick={()=> abrirModal(produto)}>TESTE</button>
          </div>
          
        );
    }})}
    </div>
</div>

<div className="p-4 m-4" >
  <h1>Pães</h1>
  <div className="grid grid-cols-4 gap-4 ">
      {produtos.map(produto => {
      if (produto.categoria === 'pães') {
        return (
          <div key={produto.id} className="border">
            <img src={`imagens/${produto.imagem}`} alt={produto.imagem} className="h-[312px] w-[312px]"/>
            <h2>{produto.nome}</h2>
            <h2>{produto.descricao}</h2>
            <h2>{produto.preco}</h2>
            <button onClick={()=> abrirModal(produto)}>TESTE</button>
          </div>
        );
    }})}
  </div>
</div>

<div className="p-4 m-4">
  <h1>Doces</h1>
  <div className="grid grid-cols-4 gap-4 ">
      {produtos.map(produto => {
      if (produto.categoria === 'doces') {
        return (
          <div key={produto.id} className="border">
            <img src={`imagens/${produto.imagem}`} alt={produto.imagem} className="h-[312px] w-[312px]"/>
            <h2>{produto.nome}</h2>
            <h2>{produto.descricao}</h2>
            <h2>{produto.preco}</h2>
            <button onClick={()=> abrirModal(produto)}>TESTE</button>
          </div>
        );
    }})}
  </div>
</div>

    {produtoSelecionado && (
      <ModalProduto produto={produtoSelecionado} fechar={fecharModal} />
    )}
  </>
);
} 
export default Menu;

import React from "react";
import Cadastro from "../components/cadastro.jsx";
import logoComNome from "../assets/Logo_com_nome.png";
import Login from "../components/login.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

const TelaLogin = () => {
 return (

<>


<Navbar/>
<div className="divtotalcadastro">
<div className="fundomarrom">
    <Login/>
<img src={logoComNome} alt="Logo_com_nome" className="imagemfundo" />
 </div>
</div>
<Footer/>
</>


)

}

export default TelaLogin;
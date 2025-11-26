import React from "react";
import Cadastro from "../components/cadastro.jsx";
import logoComNome from "../assets/Logo_com_nome.png";
import Login from "../components/login.jsx";

const TelaLogin = () => {
 return (

<>



<div className="divtotalcadastro">


<div className="fundomarrom">
    <Login/>
<img src={logoComNome} alt="Logo_com_nome" className="imagemfundo" />
 </div>


</div>

</>


)

}

export default TelaLogin;
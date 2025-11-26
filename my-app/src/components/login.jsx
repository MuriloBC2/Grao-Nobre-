import React from "react";
import './loginecadastro.css'
import logo from "../assets/logo.png";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Login= () => {

return (

<>

<div className="espacologin"> 
    <div className="imagemfundoLog">
<img src={logo} alt="" className="imagemfundoLog" />

    </div> 

   <p className="titulologin">
        Que bom ter você de volta!
        <br />
        O <span className="escrita">café já está pronto, falta só você!</span> 
      </p>

    
    <label htmlFor="">login</label>
     <div className="input-group">
    <CiUser size={20} className="icon-input" />
    <input className="inlogin" type="text" placeholder="Email ou Telefone..." />
    </div>
    

    <label htmlFor="">senha</label>
    <div className="input-group">
    <CiLock size={20} className="icon-password" />
    <input className="inlogin" type="password" placeholder="Crie a senha"/>
      
      
      
      <div class="tem-cadastro">
    Esqueceu a senha? <span class="info-icon">ⓘ</span>
    </div>

   <div className="">
    <button class="loginbotao">
    Login
    </button>
   
     <button class="loginbotao2">
    Cadastrar
    </button>





    </div>

      
      
      
      </div>
    











     </div> 

    






</> 



)

}

export default Login
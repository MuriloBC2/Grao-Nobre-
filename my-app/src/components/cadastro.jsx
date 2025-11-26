import React from "react";
import './loginecadastro.css'
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Cadastro = () => {

return (

<>
<div className="Loginda">
    <h1 className="TituloLogin">Cadastro</h1>

   <div className="input-group">
  <CiUser size={20} className="icon-input" />
  <input className="inlogin" type="text" placeholder="Nome completo..." />
  </div>
 
  <div className="input-group">
  <CiUser size={20} className="icon-input" />
  <input className="inlogin" type="text" placeholder="Email ou Telefone..." />
  </div>


  <div className="input-group">
  <CiLock size={20} className="icon-password" />
  <input className="inlogin" type="password" placeholder="Crie a senha"/>
  </div>

  <div className="input-group">
  <CiLock size={20} className="icon-password" />
  <input className="inlogin" type="password" placeholder="Confirme sua senha"/>
  

    <div class="tem-cadastro">
    Já tem cadastro? <span class="info-icon">ⓘ</span>
    </div>



    </div>

    <div className="Cadastrar">
    <button class="Cadastrar">
    Cadastrar
    </button>
   
    </div>

   




    







</div>




</>



)




}

 export default Cadastro;
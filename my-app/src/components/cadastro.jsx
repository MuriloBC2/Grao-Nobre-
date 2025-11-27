import React, { use } from "react";
import './loginecadastro.css'
import { CiLock, CiUser, CiPhone } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {

  const navigate = useNavigate();
   const handleNavigateTologin = () => {
    navigate('/login');
 }

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');

  const enviar = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;

    } else{
      axios.post('http://localhost/api/clientes/cadastrar', {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone
      })
      .then(response => {
        console.log('Usuário cadastrado com sucesso:', response.data);
        alert('Cadastro realizado com sucesso!');
        console.log("RAW response:", response);
        console.log("DATA:", response.data);
      })
      .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Tente novamente.');
      });
    }
  };


return (

<>
  <form className="Loginda" onSubmit={enviar}>
    <h1 className="TituloLogin">Cadastro</h1>

    <div className="input-group">
      <CiUser size={20} className="icon-input" />
      <input className="inlogin" type="text" placeholder="Nome completo..." value={nome} onChange={(e) => setNome(e.target.value)} />
    </div>
  
    <div className="input-group">
      <CiUser size={20} className="icon-input" />
      <input className="inlogin" type="text" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className="input-group">
      <CiPhone size={20} className="icon-input" />
      <input className="inlogin" type="tel" placeholder="Telefone..." value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
    </div>


    <div className="input-group">
      <CiLock size={20} className="icon-password" />
      <input className="inlogin" type="password" placeholder="Crie a senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
    </div>

    <div className="input-group">
      <CiLock size={20} className="icon-password" />
      <input className="inlogin" type="password" placeholder="Confirme sua senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
    
      <div className="tem-cadastro" onClick={handleNavigateTologin}>
      Já tem cadastro? <span className="info-icon" >ⓘ</span>
      </div>
    </div>

      <div className="Cadastrar">
      <button className="Cadastrar" type="submit">Cadastrar</button> 
    </div>
  </form>
</>

)}

export default Cadastro;
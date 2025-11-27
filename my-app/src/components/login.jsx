import React from "react";
import './loginecadastro.css'
import logo from "../assets/logo.png";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from "axios";




const Login= () => {

  const navigate = useNavigate();
    const handleNavigateTocadastro = () => {
    navigate('/cadastro');
   }

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

   const login = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost/api/clientes/login', {
      email: email,
      senha: senha
    })
    .then(response => {
      console.log('Login bem-sucedido:', response.data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Login realizado com sucesso!');
        navigate('/menu');
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    }) 
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    });
  };
  

return (

<>

<form className="espacologin" onSubmit={login}> 
    <div className="imagemfundoLog">
<img src={logo} alt="" className="imagemfundoLog" />

    </div> 

   <p className="titulologin">
        Que bom ter você de volta!
        <br />
        O <span className="escrita">café já está pronto, falta só você!</span> 
      </p>

    
    <label htmlFor="">Login</label>
    <div className="input-group">
      <CiUser size={20} className="icon-input" />
      <input className="inlogin" type="text" placeholder="Email ou Telefone..." value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    

    <label htmlFor="">Senha</label>
      <div className="input-group">
      <CiLock size={20} className="icon-password" />
    <input className="inlogin" type="password" placeholder="Crie a senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
      
      
      
    <div className="tem-cadastro">
    Esqueceu a senha? <span className="info-icon">ⓘ</span>
    </div>

    <div className="">
      <button className="loginbotao"> Login </button>
      <button className="loginbotao2" onClick={handleNavigateTocadastro}>Cadastrar</button>
    </div>
      </div>
      
  </form> 

    






</> 



)

}

export default Login
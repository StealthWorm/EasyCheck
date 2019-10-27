import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';  
import logo from '../assets/logo.png';
import api from '../services/api';
import symbol from '../assets/symbol.png';
import bkg from '../assets/bkgPurple.jpg';

export default function Login({match}){
    
     const [email, setEmail] = useState(''); 
     const [senha, setSenha] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
    }

    return(
    <div  className="container">
        <img id="logo" src ={bkg}></img>
        <div  className="login-modal">
          <img id="symbol1" src={symbol}></img>
          <img id="symbol2" src={symbol}></img>
          <img id="symbol3" src={symbol}></img>
          <img id="symbol4" src={symbol}></img>
          <img id="symbol5" src={symbol}></img>
          <img id="symbol6" src={symbol}></img>
          <img id="symbol7" src={symbol}></img>
          <img id="symbol8" src={symbol}></img>
          <img id="symbol9" src={symbol}></img>
          <img id="symbol10" src={symbol}></img>
          <form method="get">
            <input class="inp" placeholder="Digite seu email" value = {email} onChange={e => setEmail(e.target.value)}/> 
            <input class="inp" placeholder="Digite sua senha" type="password"/> 
            <button class="btnInfo" type="submit" >Enviar</button>
            <Link to="/"><button class="btnInfo" type="button" > Cancelar</button></Link>
          </form>
        </div>
    </div>
    );
  
}
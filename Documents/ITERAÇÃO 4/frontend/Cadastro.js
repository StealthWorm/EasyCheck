import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';  
import logo from '../assets/logo.png';
import api from '../services/api';

//history é uma propriedade que permite voce navegar entre abas definidas nas rotas
export default function Cadastro(  {history} ){

    const [name, setName] = useState(''); //para acessar o valor de username é com o set
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    async function handleSubmit(e){
        e.preventDefault();
         //console.log("{" + user + "}," + "{" + email + "}," + "{" + password + "}");
        const response = await api.post('/people/Cadastro', { 
              name,
              email,
              password
             });
        console.log(response);
             
       //const {us} = response.data;
       history.push('/Main');
      //  history.push(`/person/${us}`);
    
    }

    return(
        <div className="cadastro-container">
           
            <form onSubmit={handleSubmit}> 
                <Link to="/">
                    <img src={logo} alt="Biblio"/>
                </Link>    
                <input 
                    placeholder="Digite seu usuário"
                    value = {name}
                    onChange={e => setName(e.target.value)}
                /> 
                 <input 
                    placeholder="Digite seu email"
                    value = {email}
                    onChange={e => setEmail(e.target.value)}
                /> 
                <input  
                    type="password" 
                    id="password_field"
                    placeholder="Digite sua senha"
                    value = {password}
                    onChange={e => setPassword(e.target.value)}
                /> 
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
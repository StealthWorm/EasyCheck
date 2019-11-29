import React , {useState , Component} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';  
import logo from '../assets/logo.png';
import api from '../services/api';
import symbol from '../assets/symbol.png';
import bkg from '../assets/bkgPurple.jpg';
import bcrypt from 'bcrypt-nodejs';

const initialState = {
  email: "",
  password:"",
  emailErr: "",
  passwordErr:""
};

export default class Login extends Component{

    state = initialState;
   
    stateUser = {
      users: [],
    }
    
    handleChange = event =>{
      const isCheckBox = event.target.type === "checkbox";
      this.setState({
          [event.target.name]: isCheckBox
          ? event.target.checked
          : event.target.value
      });
    };

    componentDidMount(){   
      this.validate();
    }

    validate = async (props1 , props2) =>{
      var count = 0;
      let emailErr = "";
      let email = "";
      let passwordErr = ""; 
      
      const response = await api.get('/users');
      //const response = await api.post('/login');
      this.setState({ users: response.data });
      const {users} = this.state; 
      

      //console.log(props1);
      for(var i = 0 ; i < users.length; i++){
         //console.log(users[i].email) 
         if(users[i].email == (props1) && props1 == "admin"){
           count = 0;
           return true;
        } else if(users[i].email == (props1)){
          count = 0;
          return true;
          } else {count++;}
        }

        if(count ==  users.length && props1 != null && props2 != null){
          return false;
        } 
      return false;
    };

    handleSubmit = event =>{
        event.preventDefault();

        if(this.state.email != "" && this.state.password != ""){
            const isValid = this.validate(this.state.email, this.state.password);
      
           if(isValid){ 
            this.setState(initialState);
             if(this.state.email == "admin"){ 
               alert('ADMIN LOGANDO');
               document.getElementById("red").href = "/MainAdm";
              }
             else{  
              document.getElementById("red").href = "/Main"; 
              alert('USUÁRIO LOGANDO');
             } 
                 
           }else{  
             this.setState(initialState);
             document.getElementsByClassName("inp").placeholder = 'Email Inválido';
             document.getElementById("inpLogin").style.border = "3px solid";
             document.getElementById("inpLogin").style.borderColor = "rgba(255, 0, 0, 0.404)";
             document.getElementsByClassName("inp")[1].placeholder = 'Senha Inválida';
             document.getElementById("inpPassword").style.border = "3px solid";
              document.getElementById("inpPassword").style.borderColor = "rgba(255, 0, 0, 0.404)";
              alert('Usuário ou senha inválidos.');
           }
        }else{
          this.setState(initialState);
          document.getElementById("inpLogin").placeholder = 'Email Inválido';
          document.getElementById("inpLogin").style.border = "3px solid";
          document.getElementById("inpLogin").style.borderColor = "rgba(255, 0, 0, 0.404)";
          document.getElementsByClassName("inp")[1].placeholder = 'Senha Inválida';
          document.getElementById("inpPassword").style.border = "3px solid";
          document.getElementById("inpPassword").style.borderColor = "rgba(255, 0, 0, 0.404)";
          alert('Usuário ou senha inválidos.');
        }
    };

    render(){
      return(
      
    <div className="container">
        <img id="logo" alt="background" src ={bkg}></img>
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

          <form method="get" onSubmit={this.handleSubmit}>
            <input 
              className="inp"
              id="inpLogin"
              name = "email" 
              placeholder="Digite seu email" 
              value = {this.state.email} 
              onChange={this.handleChange}
            /> 
            <div className="stdEmailError">{this.state.emailErr}</div>

            <input 
              className="inp" 
              id="inpPassword"
              name = "password" 
              placeholder="Digite sua senha" 
              type="password"
              value = {this.state.password} 
              onChange={this.handleChange}
            /> 
            <div>{this.state.passwordErr}</div>

            <a id="red" href="/Login" onCLick={this.handleSubmit}><button  class="btnInfo"  type="submit">Enviar</button></a>
            {/* <a><button onCLick={this.handleSubmit} class="btnInfo"  type="button">Enviar</button></a> */}
            <Link to="/"><button class="btnInfo" type="button" > Cancelar</button></Link>
          </form>

        </div>
    </div>
      );
    }
}
//  <input class="inp" placeholder="Digite seu email" value = {email} onChange={e => setEmail(e.target.value)}

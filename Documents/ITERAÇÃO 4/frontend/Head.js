import React , {useState, Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Head.css';   
import './Login.css'; 
import logo2 from '../assets/logo2.png';
import phant from '../assets/phantom.png';
import bkg from '../assets/bkgD.jpg';
import close from '../assets/close.png';
import symbol from '../assets/symbol.png';
import char from '../assets/characterSelect.mp3'
import { Link } from 'react-router-dom';
import api from '../services/api';

export default class Head extends Component{


    play() {
      const audioEl = document.getElementsByClassName("aud")[0]
      audioEl.play()  
      document.getElementsByClassName("buttons")[0].style.visibility='visible';
      document.getElementsByClassName("buttons")[0].style.display='unset';
      document.getElementsByClassName("bkg")[0].style.filter = "brightness(50%)";
      document.getElementsByClassName("phantom")[0].style.filter = "brightness(50%)";
      document.getElementsByClassName("phantom")[1].style.filter = "brightness(50%)";
      document.getElementsByClassName("phantom")[2].style.filter = "brightness(50%)";
      document.getElementsByClassName("phantom")[3].style.filter = "brightness(50%)";
      document.getElementsByClassName("phantom")[4].style.filter = "brightness(50%)";
      document.getElementsByClassName("init")[0].style.visibility='hidden'; 
      document.getElementsByClassName("buttons")[0].style.transform = "translateY(-20px)"; 
    }  
    closeModal(){
      const audioEl = document.getElementsByClassName("aud")[0]
      audioEl.play() 
      document.getElementsByClassName("buttons")[0].style.transform = "translateY(20px)"; 
      document.getElementsByClassName("buttons")[0].style.display='none';  
      document.getElementsByClassName("init")[0].style.visibility='visible';
      document.getElementsByClassName("bkg")[0].style.filter = "brightness(100%)";
      document.getElementsByClassName("phantom")[0].style.filter = "brightness(100%)";
      document.getElementsByClassName("phantom")[1].style.filter = "brightness(100%)";
      document.getElementsByClassName("phantom")[2].style.filter = "brightness(100%)";
      document.getElementsByClassName("phantom")[3].style.filter = "brightness(100%)";
      document.getElementsByClassName("phantom")[4].style.filter = "brightness(100%)";
    }

  render(){
  return(
  <div className="container" id="container">
    <img className="bkg" src={bkg}></img>
        <div className="containerPhant">
            <img class="phantom" id="phant" src={phant}></img> 
            <img class="phantom" id="phant2" src={phant}></img> 
            <img class="phantom" id="phant3" src={phant}></img> 
            <img class="phantom" id="phant4" src={phant}></img> 
            <img class="phantom" id="phant5" src={phant}></img> 
        </div>

        <div className="modal-footer">
          <span id="init" onClick={this.play} class="init">
           <audio src={char} className="aud"></audio>
            <img src={logo2}></img>
          </span>
        <div className="buttons">
        <form className="loginForm" action="/Login" method="get">
            <button type="submit" className="btn" onClick={this.login}>LOGIN</button>
        </form> 
        <form className="CadastroForm" action="/Cadastro" method="get"> 
            <button type="submit" className="btn">CADASTRO</button>
        </form>   
          <button type="button" className="btnClose" onClick={this.closeModal} > <img src={close}></img></button> 
        </div>
       </div>        
  </div>
);
}
}

/*var x = document.getElementsByClassName("buttons");
alert(x[0].innerHTML);
--> usar para alerta de erro de login
*/ 
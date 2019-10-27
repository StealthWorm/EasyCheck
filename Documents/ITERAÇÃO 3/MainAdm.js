import React , { useEffect, useState , Component } from 'react';
import { Link } from 'react-router-dom';
import './MainAdm.css';
import api from '../services/api';
import logo from '../assets/logo.png'
import triangle from '../assets/triangle2.png';
import circle from '../assets/circle.png';
import bkg from '../assets/bkgPurple.jpg';
import logo2 from '../assets/logo2.png';
import dCircle from '../assets/dashCircle.png';
import borderA from '../assets/styleBorderA.png';
import borderB from '../assets/styleBorderB.png';
import phant from '../assets/phantom.png';
import close from '../assets/close.png';

export default class Main extends Component {

    create(){
        document.getElementsByClassName("insert")[0].style.transform = "translateX(20px)";
        document.getElementsByClassName("insert")[0].style.visibility='visible';
        document.getElementsByClassName("insert")[0].style.opacity="1.0";
    }

    close(){
        document.getElementsByClassName("insert")[0].style.transform = "translateX(-20px)";
        document.getElementsByClassName("insert")[0].style.visibility='hidden';
        document.getElementsByClassName("insert")[0].style.opacity="0.0";
    }

    render(){ 
        return (
        <div className="container">
            <img id="bkg" src ={bkg}></img>
            
            <img id="circle1" src={circle}></img>
            <img id="circle2" src={circle}></img>
            <img id="circle3" src={circle}></img>

            <div className="bar-vertical"> 
                <span id="borderUp">
                    <img src={borderA}></img>
                </span>
                <span id="borderDown">
                    <img src={borderB}></img>
                </span>
                    <ul class="menu-area">
                        <li><a id="createBtn" onClick={this.create} >CRIAR PEDIDO</a></li>
                        <li><a>ADICIONAR ITEM</a></li>
                        <li><a>REMOVER ITEM</a></li>
                        <li><a>ADICIONAR USUÁRIO</a></li>
                        <li><a>REMOVER USUÁRIO</a></li>
                    </ul>
            </div>
            <div className="menu">
                <div>
                    <img src={circle}></img>
                </div>
                <div id="menu-bar-image">
                    <img id="triangle" src={triangle}></img>
                    <img id="triangle2" src={triangle}></img>
                    <img id="logo2" src={logo2}></img>
                    <img id="dCircle" src={dCircle}></img>
                </div>

              <div className="itemList">
                <ul class="menu-list">
                    <li>
                        <img src={phant} ></img>
                        <a className="user"><i class="fas fa-user-circle"></i>USUÁRIO</a>
                        <ul className="sub-user">
                                <li><a>Perfil</a></li>
                                <li><a href="/" >Sair</a></li>
                        </ul>
                    </li>
                </ul>
              </div>
              
            </div>

            <div className="requisitionTable">
                <ul >
                <li>um</li>
                <li>dois</li>
                <li>tres</li>
                <li>quatro</li>
                <li>cinco</li>
                </ul>
            </div>

            <div className="insert">
            <button type="button" className="btnClose" onClick={this.close} > <img src={close}></img></button>  
            </div>

        </div>
        ); 
   }
}
//href="" ver se precisa usar dentro de cada item da lista,ele que deixa item roxo com hyperlink







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
import viajante from '../assets/traveler.png';

var pessoa = {
    nome: '',
    livro: '',
    cpf: '',
    telefone: '',
  };

export default class MainAdm extends Component {

    state = {
        users: [],
        books:[],
    }

    componentDidMount(){    
        this.loadUsers();
        this.loadBooks(); 
    }

    loadUsers = async () => {
        const response = await api.get('/users');
        this.setState({ users: response.data });
        //console.log(response.data);
    };

    loadBooks = async () => {
        const response = await api.get('/books');
        this.setState({ books: response.data.docs });
        //console.log(response.data);
    };

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

    close2(){
        document.getElementsByClassName("userInfo")[0].style.visibility='hidden';
        document.getElementsByClassName("userInfo")[0].style.opacity="0.0";
    }

    confirm(){
        //document.getElementsByClassName("insert")[0].style.transform = "translateX(-20px)";
        document.getElementsByClassName("insert")[0].style.visibility='hidden';
        document.getElementsByClassName("insert")[0].style.opacity="0.0";
        //pessoa.nome = this.state.cpf;
        //console.log(pessoa.nome);
       // document.getElementById("listaChamados").insertAfter("LI1");
        //document.getElementById("LI1").style.visibility="visible";
    }

    userState(){
        document.getElementsByClassName("userInfo")[0].style.visibility='visible';
        document.getElementsByClassName("userInfo")[0].style.opacity="1.0";
    }

    up1(){
        //document.getElementById("LI1").style.visibility= "hidden";
        document.getElementById("LI1").remove("LI1");
        //document.getElementById("LI1").style.opacity='0.0';
       // window.location.reload();
        
    }

    render(){ 
        const {users} = this.state;
        const {books} = this.state;
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
                    <li><a id="createBtn" onClick={this.create}>CRIAR PEDIDO</a></li>
                    <li><a id="AddBook" onClick={this.create}>ADICIONAR ITEM</a></li>
                    <li><a id="RmvBook" onClick={this.create}>REMOVER ITEM</a></li>
                    <li><a id="AddUser" onClick={this.create}>ADICIONAR USUÁRIO</a></li>
                    <li><a id="RmvUser" onClick={this.create}>REMOVER USUÁRIO</a></li>
                </ul>
            </div>

            <div className="menu">
                <div id="menu-bar-image">
                    <img id="triangle" src={triangle}></img>
                    <img id="triangle2" src={triangle}></img>
                    <img id="logo2" src={logo2}></img>
                    <img id="dCircle" src={dCircle}></img>
                </div>  
            </div>

            <div className="requisitionTable">
                <ul id="listaChamados">
                    <li id="LI1">
                        <p>Solicitante : Gabriel Hash</p>
                        <p>Exemplar : Estatística V.01 - Programação Intuitiva</p>
                        <p className="data">Data Retirada: 21/11/2019</p>
                        <p className="data">Data Devolução: 30/11/2019</p>
                        <button onClick={this.up1}  className="fecharChamado">Fechar Chamado</button>
                    </li>
                    <li id="LI2">
                        <p>Solicitante : Luvas Gonçalves Dias</p>
                        <p>Exemplar : História Geral V.01 - Leitura e Interpretação</p>
                        <p className="data">Data Retirada: 10/01/2019</p>
                        <p className="data">Data Devolução: 20/05/2019</p>
                        <button on click={this.up} className="fecharChamado">Fechar Chamado</button>
                    </li>
                    <li id="LI3">
                        <p>Solicitante : Jéssica Ferreira </p>
                        <p>Exemplar : Matemática V.09 - Trigonometriaa</p>
                        <p className="data">Data Retirada: 21/11/2019</p>
                        <p className="data">Data Devolução: 21/11/2019</p>
                        <button on click={this.up} className="fecharChamado">Fechar Chamado</button>
                    </li>
                    <li id="LI4">
                        <p>Solicitante : Henrique Jaime Ferreira</p>
                        <p>Exemplar : Estatística V.01 - Programação Intuitiva</p>
                        <p className="data">Data Retirada: 23/09/2019</p>
                        <p className="data">Data Devolução: 20/10/2019</p>
                        <button on click={this.up} className="fecharChamado">Fechar Chamado</button>
                    </li>
                    <li id="LI5">
                        <p>Solicitante : Larissa Medeiros</p>
                        <p>Exemplar : Estatística V.01 - Programação Intuitiva</p>
                        <p className="data">Data Retirada: 21/11/2019</p>
                        <p className="data">Data Devolução: 30/11/2019</p>
                        <button on click={this.up} className="fecharChamado">Fechar Chamado</button>
                    </li>
                    <li id="LI6">
                        <p>Solicitante : Taric Ribeiro</p>
                        <p>Exemplar : Filosovia V.01 - Indução Intuitiva</p>
                        <p className="data">Data Retirada: 21/11/2019</p>
                        <p className="data">Data Devolução: 30/11/2019</p>
                        <button on click={this.up} className="fecharChamado">Fechar Chamado</button>
                    </li>
                </ul>
            </div>

            <div className="itemList">
                <ul class="menu-list">
                    <li>
                        <img src={phant} ></img>
                        <a className="user">USUÁRIO</a>
                        <ul className="sub-user">
                            <li><a onClick={this.userState}>Perfil</a></li>
                            <li><a href="/" >Sair</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="insert">
                <h1>DIGITE OS DADOS DA SOLICITAÇÃO</h1>
                <form className="formStd">
                    <h4 id="T1" class="title">Nome do solicitante</h4>
                    <select id="cbUser">
                        {users.map(user => (    
                        <option key={user._id}>
                        {user.name}
                        </option>                     
                        ))}                  
                    </select>  
                    <h4 id="T2" class="title">Código do exemplar</h4>
                        <select id="cbBook">
                        {books.map(book => (    
                        <option key={book._id}>
                        {book.title}
                        </option>                     
                        ))}                  
                    </select> 
                    <h4 id="T3" class="title">Data de Emissão</h4>
                    <input name = "" placeholder="" />
                    <h4 id="T4" class="title">Data de Retirada</h4>
                    <input name = "" placeholder=""/>                        
                </form>
                <button  id="btnConfirm" onClick={this.confirm} >CONFIRMAR</button>
                <button id="btnClose" onClick={this.close} > <img src={close}></img></button>
            </div>

            <div  className="userInfo">
                <img id="viajante" src={viajante}></img>
                <button  id="btnCloseUser" onClick={this.close2} > <img src={close}></img></button>
                <form className="formInfo">
                    <h3 color='white'>EMAIL</h3>
                    <input name = "email" placeholder=""/> 
                    <h3>USUÁRIO</h3>
                    <input name = "usuário" placeholder=""/> 
                </form>
                <div className="book-list-fav">
                    {books.map(book => (        //cada book mapeado dentro de uma var "book=> parametros para referenciar" 
                    <article key={book._id}>
                        <img src={book.avatar} alt="Book"></img>
                        <p>{book.description}</p>
                        <p>Gênero:{book.genre}</p>
                        <footer><strong>{book.title}</strong></footer>
                    </article> 
                    ))}
                    <p>Contagem de Livros: {this.state.books.length}</p>
                </div>  
            </div>              
        </div>
        ); 
   }
}
//href="" ver se precisa usar dentro de cada item da lista,ele que deixa item roxo com hyperlink



{/* 
            

            
             */}




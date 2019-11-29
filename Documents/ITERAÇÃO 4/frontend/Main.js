import React , { useEffect, useState , Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import backgroundViajante from '../assets/travelerBKG.png';
import api from '../services/api';
import logoApi from '../assets/logo2.png';
import CircleBar from '../assets/dashCircle.png';
import fasntasma from '../assets/phantom.png';
import fechar from '../assets/close.png';
import viajanteIcone from '../assets/traveler.png';
//match possui todos os parametros que foram passados para essa rota
export default class Main extends Component {

// adicionar função de busca e a lista principal 
// verificar busca por genero (tentar)
//arrumar perfil do usuário

state = {
    books: [],
}

componentDidMount(){    //é uma function do react por isso nao precisa usar a seta =>
    this.loadProducts(); //quando a função é criada por nos e não é padrao do react precisa usar a seta =>
}

loadProducts = async () => {
    const response = await api.get('/books');
    this.setState({ books: response.data.docs });
    //console.log(response.data.docs);
};

perfil(){
    document.getElementsByClassName("Perfil")[0].style.visibility='visible';
    document.getElementsByClassName("Perfil")[0].style.opacity="1.0";
}

close(){
    document.getElementsByClassName("Perfil")[0].style.visibility='hidden';
    document.getElementsByClassName("Perfil")[0].style.opacity="0.0";
}

    render(){ 
    const {users} = this.state;
    const {books} = this.state;
    return (
    <div className="head">
        <img id="bkgMain" src ={backgroundViajante}></img>
        <div id="menu-bar-bkg">  
            <img id="circle" src={CircleBar}></img>
            <a href="/Main" alt="Home">
                <img id="logoB"  src={logoApi} ></img>
                <span class="tooltiptext">Home</span>
            </a> 
        </div>
        
        <div className="menuItens">
            <ul className="listItens">
                <li>
                    <img src={fasntasma} ></img> 
                    <a>USUÁRIO</a>
                    <ul className="submenu-user">
                        <li><a onClick={this.perfil}>Perfil</a></li>
                        <li><a href="/" >Sair</a></li>
                    </ul> 
                </li>
                <li>
                    <img src={fasntasma} ></img>
                    <a>GÊNERO</a>
                    <ul className="submenu-genre">
                        <li><a>Didádito</a></li>
                        <li><a>Ação</a></li>
                        <li><a>Aventura</a></li>
                        <li><a>Romance</a></li>
                        <li><a>Ficção</a></li>
                        <li><a>Terror</a></li>
                        <li><a>Poesia</a></li>
                    </ul>  
                </li>
            </ul>
        </div>

        <div  className="Perfil">
            <img src={viajanteIcone}></img>
            <button onClick={this.close} > <img src={fechar}></img></button>
            <form className="formInfo">
                <h3 color='white'>EMAIL</h3>
                <input name = "email" placeholder="" value = "recebe_variavel.html?minhaVariavel="/> 
                <h3>USUÁRIO</h3>
                <input name = "usuário" placeholder=""/> 
            </form>
            <div className="user-fav">
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

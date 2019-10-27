import React , { useEffect, useState , Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import api from '../services/api';
import logo from '../assets/logo.png';
//match possui todos os parametros que foram passados para essa rota
export default class Main extends Component {

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

    render(){
        const {books} = this.state;
        return (
         <div className="main">
          
            <div className="menu-bar">
                <nav>
                    <div className="search-box">
                        <input className="search-txt" type="text" placeholder="Buscar.." href="handlePesquisa()"/>
                        <a className="search-btn"  href="">
                            <i class="fas fa-search"></i>
                        </a>
                    </div>
                    <ul class="menu-area">
                        <li><a id="Home" href="">Home</a></li>
                        <li><a href="">Gênero</a>
                             <ul className="sub-menu-genre">
                                <li><a class="sub" href="">Didático</a></li>
                                <li><a class="sub"href="">Ação</a></li>
                                <li><a class="sub" href="">Aventura</a></li>
                                <li><a class="sub" href="">Comédia</a></li>
                                <li><a class="sub" href="">Drama</a></li>
                                <li><a class="sub" href="">Ficção</a></li>
                                <li><a class="sub" href="">Romance</a></li>
                                <li><a class="sub" href="">Policial</a></li>
                                <li><a class="sub" href="">Suspense</a></li>
                                <li><a class="sub" href="">Terror</a></li>
                            </ul>
                        </li>
                        <li><a href="">Contato</a></li>
                        <li>
                            <a className="user">
                            <i  class="fas fa-user-circle"></i>
                            Usuário
                            </a>
                            <ul className="sub-menu-user">
                                <li><a class="sub" href="">Perfil</a></li>
                                <li><a class="sub" href="" ><Link  class="sub" to="/">Sair</Link></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>  
            </div>

            <div className="book-list">
                {books.map(book => (        //cada book mapeado dentro de uma var "book=> parametros para referenciar" 
                    <article key={book._id}>
                    <img src={book.avatar} alt="Book"></img>
                    <p>{book.description}</p>
                    <p>{book.genre}</p>
                    <a href="">Acessar</a>
                    <footer><strong>{book.title}</strong></footer>
                    </article> 
                ))}
                 <p>Contagem de Livros: {this.state.books.length}</p>
            </div>
        </div>
        ); 
   }
}
// como passar para outra página
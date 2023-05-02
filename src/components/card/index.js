import React, { useState, useEffect } from 'react';
import './card.css';

export default function Card() {
    const [filmes, setFilmes] = useState([]);
    const [listaFilmes, setListaFilmes] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const [tipoOrdenacao, settipoOrdenacao] = useState('anoNotaTitulo');
    
const ordenarFilme = (event) => {
  const tipoOrdenacao = event.target.value;
  settipoOrdenacao(tipoOrdenacao);
  ordenarFilmes(tipoOrdenacao);
};

const ordenarFilmes = (tipoOrdenacao) => {
    const filmesOrdenados = [...filmes].sort((a, b) => {
      switch (tipoOrdenacao) {
        case "titulo":
          return a.titulo.localeCompare(b.titulo);
        case "nota":
          return a.nota - b.nota;
        case "ano":
          return a.ano - b.ano;
        default:
          return 0;
      }
    });
    setFilmes(filmesOrdenados);
  };

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(infos => {
                setListaFilmes(infos);
            });
    }, []);
    useEffect(() => {
        const filmesFiltrados = listaFilmes.filter(filme =>
            filme.titulo.toLowerCase().includes(pesquisa.toLowerCase())
        );
        filmesFiltrados.sort((a, b) => a.titulo.localeCompare(b.titulo));
        setFilmes(filmesFiltrados);
    }, [listaFilmes, pesquisa]);
    const handleInputChange = event => {
        setPesquisa(event.target.value);
    }
    const handleSearch = event => {
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center" >
                    <div className='form-inline ml-auto'>
                        <form onSubmit={handleSearch}>
                            <div className='text-center text-danger'>Qual filme deseja encontrar?</div>
                            <input
                                type="text"
                                className="form-control"
                                id="searchInput"
                                placeholder="Digite o título do filme"
                                value={pesquisa}
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="btn btn-secondary btn-group btn-danger ">Encontrar filme</button>
                        </form>
                        
                        <select value={tipoOrdenacao} onChange={ordenarFilme}>
                            <option value="ano">Ano</option>
                            <option value="nota">Nota</option>
                            <option value="titulo">Título</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col card-columns">
                        {filmes.sort((a, b) => a.titulo.localeCompare(b.titulo)).map(filme => (
                            <div className="card">
                                <img src={filme.poster} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{filme.titulo}</h5>
                                    <p className="card-text">Ano: {filme.ano}</p>
                                    <p className="card-text">Nota: {filme.nota}</p>
                                    <a href="" className="btn btn-primary">Assistir</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
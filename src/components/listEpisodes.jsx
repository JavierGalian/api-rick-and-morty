import { fetchData } from "../api/api";
import { useEffect, useState } from "react";
import NavPage from './navPage';

import imgEpisodes from '../assets/imgEpisodes.jpg';


function ListEpisodes (){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [cantPage, setCantPage] = useState(0);

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/episode?page=${page}`;
        fetchData(url).then((data) => {
            if (data && data.results) { // Verificar si data y data.results tienen valor
                setData(data.results);
                setCantPage(data.info.pages);
                setLoading(false);
                console.log(data.results);
                console.log(data.info.pages); }
        });

    }, [page]);

    return(
        <div className='container '>
                <NavPage page={page} setPage={setPage} cantPage={cantPage}/>
                <div className='row'>
                    {
                        loading ? (<h2>Loading</h2>) : (
                            data.map((episode) => {
                                return (
                                    <div className='col-md-4' >
                                        <div key={episode.id} className="text.center p-5 text-white">
                                            <img src={imgEpisodes} alt={episode.name} />
                                            <h3>Nombre: {episode.name}</h3>
                                            <p>Episodio: {episode.episode}</p>
                                            <p>Emision: {episode.air_date}</p>
                                        </div>
                                    </div>
                                );
                            })
                        )
                    }
                </div>
            </div>
    )
}

export default ListEpisodes;
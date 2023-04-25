import { fetchData } from "../api/api";
import { useEffect, useState } from "react";

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between'>
            <p>pagina: {props.page}</p>
            <button className='btn btn-primary btn-sm' onClick={() => { props.setPage(props.page + 1) }}> pagina {props.page + 1} </button>
        </header>
    )
}

function ListEpisodes (){
    const [dataa, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/episode?page=${page}`;
        fetchData(url).then((data) => {
            setData(data.results);
            setLoading(false);
            console.log(data.results)
        });

    }, [page]);

    return(
        <div className='container '>
                <NavPage page={page} setPage={setPage} />
                <div className='row'>
                    {
                        loading ? (<h2>Loading</h2>) : (
                            dataa.map((episode) => {
                                return (
                                    <div className='col-md-4' >
                                        <div key={episode.id} className="text.center p-5 ">
                                            <h3>{episode.name}</h3>
                                            <p>{episode.episode}</p>
                                            <p>{episode.air_date}</p>
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
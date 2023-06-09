import { useEffect, useState } from 'react'
import Caracteres from './caracteres';
import { fetchData } from "../api/api";
import NavPage from './navPage';

function ListCharacters(){
    const [data, setData ] = useState ([]);
    const [loading, setLoading] = useState (true);
    const [page, setPage] = useState(1);
    const [cantPage, setCantPage] = useState(0);

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/character?page=${page}`;
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
                    data.map((caracter)=>{
                        return(
                            <div className='col-md-4' key={caracter.id}>
                                <Caracteres  caracter={caracter}/>
                            </div>
                        );
                    })
                )
            }
            </div>
        </div>
    )
}

export default ListCharacters;
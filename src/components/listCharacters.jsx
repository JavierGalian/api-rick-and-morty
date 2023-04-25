import { useEffect, useState } from 'react'
import Caracteres from './caracteres';
import { fetchData } from "../api/api";
import NavPage from './navPage';

function ListCharacters(){
    const [caracter, setCaracter ] = useState ([]);
    const [loading, setLoading] = useState (true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/character?page=${page}`;
        fetchData(url).then((data) => {
        setCaracter(data.results);
        setLoading(false);
        console.log(data.results)
        });

    }, [page]);

    return(
        <div className='container '>
            <NavPage page={page} setPage={setPage}/>
            <div className='row'>
            {
                loading ? (<h2>Loading</h2>) : (
                    caracter.map((caracter)=>{
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
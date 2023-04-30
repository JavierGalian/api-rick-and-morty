import { fetchData } from "../api/api";
import { useEffect, useState } from "react";
import NavPage from './navPage';

function ListLocations(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [cantPage, setCantPage] = useState(0);

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/location?page=${page}`;
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
                <NavPage page={page} setPage={setPage} cantPage={cantPage} />
                <div className='row'>
                    {
                        loading ? (<h2>Loading</h2>) : (
                            data.map((locations) => {
                                return (
                                    <div className='col-md-4' >
                                        <div key={locations.id} className="text.center p-5 text-white">
                                            <h3>Nombre: {locations.name}</h3>
                                            <p>Tipo: {locations.type}</p>
                                            <p>Dimension: {locations.dimension}</p>
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

export default ListLocations;
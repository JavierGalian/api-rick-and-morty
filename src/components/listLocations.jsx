import { fetchData } from "../api/api";
import { useEffect, useState } from "react";
import NavPage from './navPage';

function ListLocations(){
    const [dataa, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/location?page=${page}`;
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
                            dataa.map((locations) => {
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
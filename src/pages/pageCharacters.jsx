import Navbar from "../components/navbar";
import ListCharacters from "../components/listCharacters";



function PageCharacters(){
    return(
        <>
            <Navbar/>
            <h2>Personajes</h2>
            <ListCharacters/>

        </>
    )
}

export default PageCharacters;
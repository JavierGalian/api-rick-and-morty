import Navbar from "../../../Rick-and-Morty/src/components/navbar";
import ListCharacters from "../../../Rick-and-Morty/src/components/listCharacters";



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
import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/options.css';

import ImageCharacters from '../assets/options/rick-and-morty.jpg';
import ImageEpisodes from '../assets/options/episodesCopi2.png';
import ImageLocations from '../assets/options/locationsCopi.jpg';



const menu = [
    { option: 'episodios', Image: ImageEpisodes, src: 'imagen2', url: `${import.meta.env.BASE_URL}episodes`},
    { option: 'personajes', Image: ImageCharacters, src: 'imagen1', url: `${import.meta.env.BASE_URL}characters`},
    { option: 'ubicacion', Image: ImageLocations, src: 'imagen3', url: `${import.meta.env.BASE_URL}locations`},
];


function OptionsMenu() {

    return (
        <div className='container my-5'>
            <div className='row'>
                {
                    menu.map((menu) => {
                        return (
                            <div className='col-md-4 text-center'>
                                <Link className='link-menu-option' to={menu.url}>
                                <img className='img-menu-option img-fluid rounded-pill' src={menu.Image} alt={menu.src} />
                                <p className='text-menu-option'>{menu.option}</p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default OptionsMenu;
import { useLocation,Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '../styles/navbar.css';

import { useEffect, useState } from "react";

import Logo1 from '../assets/logo9.jpg';
import Logo2Redirect from '../assets/logo8.jpg';


function Navbar() {
    const [page, setPage] = useState('Home');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.substring(1);

        setPage(path);

        const navLinks = document.querySelectorAll('.navbar-nav a');
        navLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, [location]);

    const handlePageClick = (pageName) => {
        setPage(pageName.toLowerCase());
    };


    return (
        <>
            <div id="sidebar" className="navbar">

                <div className="navbar-logos">
                    <img src={Logo1} alt="" className="logo1" />
                    <Link to={'/'}> <img src={Logo2Redirect} alt="" className="logo2" /> </Link>
                </div>
                <nav className="navbar-nav">
                    <ul className="navbar-list-link">
                        <li>
                            <Link to={`${import.meta.env.BASE_URL}`} className={page === 'Home' ? 'active' : ``} onClick={() => { handlePageClick('Home') }}>Home</Link>
                        </li>
                        <li>
                            <Link to={`${import.meta.env.BASE_URL}episodes`} className={page === 'episodios' ? 'active' : ``} onClick={() => { handlePageClick('episodios') }}>episodios</Link>
                        </li>
                        <li>
                            <Link to={`${import.meta.env.BASE_URL}characters`} className={page === 'personajes' ? 'active' : ``} onClick={() => { handlePageClick('personajes') }}>personajes </Link>
                        </li>
                        <li>
                            <Link to={`${import.meta.env.BASE_URL}locations`} className={page === 'ubicacion' ? 'active' : ``} onClick={() => { handlePageClick('ubicacion') }}>ubicacion</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </>

    )
}

export default Navbar;
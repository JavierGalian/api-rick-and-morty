import { useState, useEffect } from 'react';

import image1 from '../assets/slider/DWMLHZSLTZB2VARS5777M3L4ZM.jpg';
import image2 from '../assets/slider/rick-morty-5x02-2388381-1624952351.jpeg';
import image3 from '../assets/slider/Rick-Morty.png';

const images = [
    { id: 1, url: image1, src: 'imagen1' },
    { id: 2, url: image2, src: 'imagen2'  },
    { id: 3, url: image3, src: 'imagen3'  },
];

function Slider() {
    
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = index + 1;
            if (newIndex >= images.length) {
                setIndex(0);
            } else {
                setIndex(newIndex);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='container'>
            <div id="slider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image) => (
                        <div key={image.id} className={`carousel-item${index === image.id - 1 ? ' active' : ''}`}>
                            <img src={image.url} className="d-block w-100" alt={image.alt}/>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Slider;
import { article } from '../db';
import { useState, useEffect, useRef } from 'react';


const Carousel = () => {
    const [n, setN] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<string>(article[n].image);

    const [autoplay, setAutoplay] = useState(true);
    const autoplayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if(autoplay) {
            setCurrentImage(article[n].image);
            autoplayTimeout.current = setTimeout(() => {
                n < 10 ? setN(i => i + 1) : setN(0);
            }, 3000);
            return () => { 
                autoplayTimeout.current && clearTimeout(autoplayTimeout.current) };
        }
    }, [n, autoplay]);

    const prevImg = () => {
        setAutoplay(false);
        autoplayTimeout.current && clearTimeout(autoplayTimeout.current); //tempo in cui viene mostrata l'immagine
        n > 0 ? setN(i => i - 1) : setN(9);
        setCurrentImage(article[n].image);
        setAutoplay(true);
    }

    const nextImg = () => {
        setAutoplay(false);
        autoplayTimeout.current && clearTimeout(autoplayTimeout.current); //tempo in cui viene mostrata l'immagine
        n < 10 ? setN(i => i + 1) : setN(0);
        setCurrentImage(article[n].image);
        setAutoplay(true);
    }
    return (
        <div className="carouselContainer">
            <i onClick={prevImg} className="material-icons">chevron_left</i>
                <img className="carousel" src={currentImage} alt="" />
            <i onClick={nextImg} className="material-icons">chevron_right</i>
        </div>
    );
}

export default Carousel;
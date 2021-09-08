import React from 'react';
import HeaderHome from './HeaderHome';
import SearchBar from './SearchBar';
import Carousel from './Carousel';
import { article } from "../db";
import { useState, useEffect } from 'react';
import { useMemo } from 'react';

const Home = () => {
    const [n, setN] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<string>(article[n].image);

    useEffect(() => {
        const interval = setInterval(() => {
            n < 10 ? setN(i => i+1) : setN(0);
            setCurrentImage(article[n].image);
        }, 3000);
        return () => clearInterval(interval);
    }, [n])

    const prevImg = async () => {
        await n > 0 ? setN(i => i-1) : setN(10);
        setCurrentImage(article[n].image);
    }

    return (
        <div>
            <HeaderHome />
            <hr style={{margin: 0, border: '0.5px solid'}} />
            <div>
                <SearchBar />
            </div>
            <div className="container">
                <i onClick={() => {prevImg()}} className="material-icons">chevron_left</i>
                    <Carousel imm={currentImage} />
                <i className="material-icons">chevron_right</i>
            </div>
                
        </div>
    );
}

export default Home;
import React, { useRef, useCallback } from 'react';
import HeaderHome from './HeaderHome';
import SearchBar from './SearchBar';
import Carousel from './Carousel';
import { article } from "../db";
import { useState, useEffect } from 'react';
import TilesSection from './TilesSection';

const Home = () => {
    
    return (
        <div>
            <HeaderHome />
            <hr style={{margin: 0, border: '0.5px solid'}} />
            <SearchBar />
            <Carousel />
            <TilesSection />
        </div>
    );
}

export default Home;
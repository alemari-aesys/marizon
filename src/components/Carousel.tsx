// import { articleInt } from '../interface/interface';
import { useState, useEffect } from 'react';


const Carousel: React.FC<{imm: string}> = ({ imm }) => {


    return (
        <div className="carousel">
            <img width="600px" height="400px" src={imm} alt="" />
        </div>
    );
}

export default Carousel;
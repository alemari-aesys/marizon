import React, { useEffect, useState } from 'react';
import axios from "axios";
import { article } from "../db";
import HeaderBasic from './HeaderBasic';
import LandingForm from './LandingForm';


const Landing = () => {

    return (
        <div>
            <HeaderBasic />
            <hr style={{margin: 0, border: '0.5px solid'}} />
            <LandingForm />
        </div>
    );
}

export default Landing;
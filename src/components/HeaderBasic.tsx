import * as React from 'react';
import logo from "../assets/logo.png";

const HeaderBasic = () => {
    return (
            <header>
                <div style={{display: 'flex'}}>
                <a href="/"><img className="logo" src={logo} alt="logo" /></a>
                <nav className="nav__links">
                    <ul>
                        <li><a href="#">SERVIZI</a></li>
                        <li><a href="#">PROGETTI</a></li>
                        <li><a href="#">SU DI NOI</a></li>
                    </ul>
                </nav>
                </div>
            </header>
    );
}

export default HeaderBasic;
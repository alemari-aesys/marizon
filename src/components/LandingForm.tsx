import { useHistory } from 'react-router';
import useWindowSize from '../hooks/useWindowsSize';


const LandingForm = () => {
    const history = useHistory();
    const [height, width] = useWindowSize();

    return (
        <div className="landingForm">
            <div className="content">
                <h3>Sei già un utente?</h3>
                <input type="text" placeholder="nome utente" />
                <input type="password" placeholder="password" />
                <button onClick={()=>{history.push("/Home")}}>ENTRA</button>
            </div>
            {width < 609 ? null : <div className="vl" />}
            <div className="content">
                <h3>Non sei registrato?</h3>
                <input type="text" placeholder="nome utente" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="conferma password" />
                <button onClick={()=>{history.push("/Home")}}>REGISTRAMI</button>
            </div>
        </div>
    );
}

export default LandingForm;
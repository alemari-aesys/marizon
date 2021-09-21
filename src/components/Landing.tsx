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
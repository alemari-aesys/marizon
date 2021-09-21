import { person } from "./Personal";

const PersonalContent: React.FC<person> = ({
  username,
  name,
  surname,
}): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="personalContent">
        <img
          className="profilePic"
          src="https://alumni.crg.eu/sites/default/files/default_images/default-picture_0_0.png"
          alt="Foto profilo"
        />
        <h4 style={{ textAlign: "center" }}>{username.toUpperCase()}</h4>
        <div className="registry">
          <ul className="personalData1">
            <li>Nome</li>
            <li>Cognome</li>
            <li>Data di nascita</li>
            <li>Città di residenza</li>
            <li>Indirizzo</li>
            <li>N. tel</li>
          </ul>
          <ul className="personalData2">
            <li>Tizio</li>
            <li>Strano</li>
            <li>25/12/0</li>
            <li>Gerusalemme</li>
            <li>Via Giuseppe Cornuto 33</li>
            <li>555-666333</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalContent;

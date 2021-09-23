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
        <div className="registryContainer">
          <div className="label">
            <div>Nome</div>
            <div>Cognome</div>
            <div>Città</div>
            <div>Data di nascita</div>
            <div>Indirizzo</div>
          </div>
          <div className="empty"></div>
          <div className="data">
            <div>Alessandro</div>
            <div>Marinelli</div>
            <div>Pescara</div>
            <div>Stocazzo</div>
            <div>Via dalle palle</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalContent;

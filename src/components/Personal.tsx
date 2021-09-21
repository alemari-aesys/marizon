import HeaderHome from "./HeaderHome";
import PersonalContent from "./PersonalContent";

interface person {
  username: string;
  name: string;
  surname: string;
}

const Personal: React.FC<person> = ({
  username,
  name,
  surname,
}): JSX.Element => {
  return (
    <div>
      <HeaderHome />
      <hr style={{ margin: 0, border: "0.5px solid" }} />
      <PersonalContent username={username} name={name} surname={surname} />
    </div>
  );
};

export type { person };
export { Personal };

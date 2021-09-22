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
      <PersonalContent username={username} name={name} surname={surname} />
    </div>
  );
};

export type { person };
export { Personal };

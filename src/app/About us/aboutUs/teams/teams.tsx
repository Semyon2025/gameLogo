import { useEffect, useState } from "react";
import "./styles.css";
import { fetchTeams, Team } from "../../../../mocks/gamesTeams";
import defaultIcon from "../../../../images/Avatar 1.png";

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = defaultIcon;
};

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetchTeams().then(setTeams);
  }, []);

  return (
    <div className="">
        <h2 className="teams-title">Our Team</h2>
      <div className="teams">
      
        {teams.map((team) => (
          <div className="team" key={team.id}>
            <img
              src={team.img}
              alt={`Game ${team.id}`}
              onError={handleImgError}
            />
           
            <p> {team.name}</p>
            <p> {team.rang}</p></div>
          
        ))}
      </div>
    </div>
  );
}

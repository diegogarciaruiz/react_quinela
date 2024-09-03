import React from "react";
import TeamInfoField from "../../molecules/TeamInfoField";
import "../../organisim/TeamList/style.css";

const TeamList = ({ teams }) => {
  const teamPairs = [];
  for (let i = 0; i < teams.length; i += 2) {
    teamPairs.push(teams.slice(i, i + 2));
  }

  return (
    <div>
      {teamPairs.map((pair, index) => (
        <div key={index} className="team-row">
          {" "}
          
          {pair.map((team, subIndex) => (
            <div
              key={subIndex}
              className={`team-container ${
                subIndex % 2 !== 0 ? "reverse" : ""
              }`} 
            >
              <TeamInfoField
                teamName={team.name}
                photoSrc={team.photo}
                name={`team-${index}-${subIndex}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TeamList;

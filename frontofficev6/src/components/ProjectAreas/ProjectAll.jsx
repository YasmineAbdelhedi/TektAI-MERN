// ProjectAll.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectItem from "./ProjectDetailsArea/ProjectItems";

const ProjectAll = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/team/teams");
        setTeams(response.data);
      } catch (error) {
        console.error("Failed to fetch challenges:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <section className="shop-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          {teams.map((team, index) => (
            <div key={index} className="col-md-4 mb-4">
              <ProjectItem team={team} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectAll;

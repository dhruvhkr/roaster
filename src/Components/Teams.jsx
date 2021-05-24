import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Teams.css";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
function Teams() {
  const roaster = useSelector((state) => state.roaster.roaster);
  let teams = [];
  const history = useHistory();

  return (
    <div className="playersContainer">
      <Header />

      <div className="playerInfo">
        <p style={{ fontWeight: "bold" }}>Team Name</p>
        <p style={{ fontWeight: "bold" }}>View Players</p>
      </div>
      {roaster &&
        roaster.map((user, i) => {
          const available = teams.includes(user.team);
          if (!available) {
            teams.push(user.team);
            return (
              <div className="playerInfo" key={i}>
                <p>{user.team}</p>
                <SupervisorAccountIcon
                  onClick={() =>
                    history.replace({
                      pathname: "/players",
                      state: user.team,
                    })
                  }
                  style={{ color: "red", cursor: "pointer" }}
                />
              </div>
            );
          }
        })}
    </div>
  );
}

export default Teams;

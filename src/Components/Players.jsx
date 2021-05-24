import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Players.css";
import { deletePlayer } from "./Ducks/roasterReducer";
import { useLocation } from "react-router";
function Players() {
  const roaster = useSelector((state) => state.roaster.roaster);
  const location = useLocation();
  const dispatch = useDispatch();
  const [player, setPlayer] = useState([]);
  const [name, setName] = useState([]);
  const [team, setTeams] = useState([]);

  function searchPlayer(e) {
    e.preventDefault();
    console.log(location);
    console.log(name);
    let temp_array = roaster.filter((elem) => elem.player.includes(name));
    setPlayer([...temp_array]);
    console.log(temp_array);
  }
  function removePlayer(player, team) {
    const removedPlayer = { player, team };
    dispatch(deletePlayer(removedPlayer));
    const tempArray = JSON.parse(localStorage.getItem("data"));
    const index = tempArray.findIndex(
      (teamPlayer) => teamPlayer.player == player && teamPlayer.team == team
    );
    tempArray.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(tempArray));
    alert("Player Deleted Successfully");
  }
  return (
    <div className="playersContainer">
      <Header />
      <form onSubmit={searchPlayer}>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Search Player"
        />
        <button>Search</button>
      </form>
      <div className="playerInfo">
        <p style={{ fontWeight: "bold" }}>Player Name</p>
        <p style={{ fontWeight: "bold" }}>Team Name</p>
        <p style={{ fontWeight: "bold" }}>Delete</p>
      </div>
      {roaster &&
        !location.state &&
        player.length == 0 &&
        roaster.map((user, i) => (
          <div className="playerInfo" key={i}>
            <p>{user.player}</p>
            <p>{user.team}</p>
            <DeleteIcon
              onClick={() => removePlayer(user.player, user.team)}
              style={{ color: "red", cursor: "pointer" }}
            />
          </div>
        ))}
      {roaster &&
        location.state &&
        player.length == 0 &&
        roaster.map((user, i) => {
          if (location.state === user.team) {
            return (
              <div className="playerInfo" key={i}>
                <p>{user.player}</p>
                <p>{user.team}</p>
                <DeleteIcon
                  onClick={() => removePlayer(user.player, user.team)}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </div>
            );
          }
        })}
      {player.length !== 0 &&
        player.map((user, i) => {
          {
            /* if (location.state === user.team) { */
          }
          return (
            <div className="playerInfo" key={i}>
              <p>{user.player}</p>
              <p>{user.team}</p>
              <DeleteIcon
                onClick={() => removePlayer(user.player, user.team)}
                style={{ color: "red", cursor: "pointer" }}
              />
            </div>
          );
          {
            /* } */
          }
        })}
    </div>
  );
}

export default Players;
